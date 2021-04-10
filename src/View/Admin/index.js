import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import { IoMdTrash, IoMdCreate, IoIosLogOut } from 'react-icons/io';

import aisles from '../../helpers/aisles';

import { AuthContext } from '../../authy/Auth';
import Logout from '../../authy/Logout';

import { ProductTile } from './styles.js';
import Blocker from '../../components/Blocker';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';
import Tile from '../../components/Tile';

function Admin() {
  const { currentUser } = useContext(AuthContext);
  const ref = firebase.firestore().collection('products');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aisle, setAisle] = useState('');
  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [editOpen, isEditOpen] = useState(false);

  //REALTIME GET FUNCTION
  function getProducts() {
    setLoading(true);
    ref.orderBy('aisle', 'asc').onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [currentUser]);

  // ADD FUNCTION
  function addProduct() {
    const owner = currentUser ? currentUser.uid : 'unknown';
    const ownerEmail = currentUser ? currentUser.email : 'unknown';

    const newProduct = {
      aisle,
      item,
      id: uuidv4(),
      owner,
      ownerEmail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };

    ref
      .doc(newProduct.id)
      .set(newProduct)
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  function deleteProduct(product) {
    ref
      .doc(product.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editProduct(product) {
    const updatedproduct = {
      item: item,
      aisle: aisle,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };
    setLoading();
    ref
      .doc(product.id)
      .update(updatedproduct)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    //TODO: <Header> Title & Logout
    <>
      <Header>
        <h1>Find the product</h1>
        <Button onClick={Logout}>
          <IoIosLogOut />
        </Button>
      </Header>

      <Search items={products} />
      {newItem === true ? (
        <>
          <Modal
            heading="Add New Item"
            onClose={() => {
              setNewItem(false);

              setItem(null);
            }}
            onSave={() => addProduct()}
            primaryBtn="Add"
          >
            <TextInput
              placeholder="Item name"
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <Select
              options={aisles}
              onChange={(e) => setAisle(e.target.value)}
            />
          </Modal>
          <Blocker onClick={() => setNewItem(false)} />
        </>
      ) : (
        ''
      )}
      {editOpen === true ? (
        <>
          <Modal
            heading="Edit item"
            onClose={() => {
              isEditOpen(false);
              setItem(null);
            }}
            onSave={() => editProduct(editItem)}
          >
            <TextInput
              placeholder="Item name"
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <Select
              selectedItem={aisle}
              options={aisles}
              onChange={(e) => setAisle(e.target.value)}
            />
          </Modal>
          <Blocker onClick={() => isEditOpen(false)} />
        </>
      ) : (
        ''
      )}
      {loading ? <Loading /> : null}
      <ProductTile>
        {products.map((product) => (
          <Tile key={product.id} className="product-tile--item">
            <div className="product-tile--name">
              <p>{product.item}</p>
              <span>{product.aisle}</span>
            </div>
            <span className="product-tile-buttons">
              <Button
                onClick={() => {
                  setEditItem(product);
                  setItem(product.item);
                  setAisle(product.aisle);
                  isEditOpen(true);
                }}
                ghost
              >
                <IoMdCreate />
              </Button>
              <Button onClick={() => deleteProduct(product)} ghost>
                <IoMdTrash />
              </Button>
            </span>
          </Tile>
        ))}
        <span className="add-new-item">
          <Button primary fullWidth onClick={() => setNewItem(true)}>
            Add New Item
          </Button>
        </span>{' '}
      </ProductTile>
    </>
  );
}

export default Admin;
