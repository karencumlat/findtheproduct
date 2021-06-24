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
  const [confirmDelete, setConfirmDelete] = useState({ isOpen: false });

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

    const currentProducts = products.filter(
      (i) => i.aisle === aisle && i.item === item
    );

    const newProduct = {
      aisle,
      item,
      id: uuidv4(),
      owner,
      ownerEmail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };

    if (currentProducts.length === 0) {
      ref
        .doc(newProduct.id)
        .set(newProduct)
        .catch((err) => {
          console.error(err);
        });
      setNewItem(false);
      alert('item successfully added');
    } else {
      alert('item already exist');
    }
  }

  //DELETE FUNCTION
  function deleteProduct(product) {
    ref
      .doc(product.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
    setConfirmDelete({ isOpen: false });
    alert('item successfully deleted');
  }

  // EDIT FUNCTION
  function editProduct(product) {
    const updatedproduct = {
      item: item,
      aisle: aisle,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };

    const currentProducts = products.filter(
      (i) => i.aisle === aisle && i.item === item
    );

    if (currentProducts.length === 0) {
      setLoading();
      ref
        .doc(product.id)
        .update(updatedproduct)
        .catch((err) => {
          console.error(err);
        });
      isEditOpen(false);
      alert('item successfully updated');
    } else {
      alert('item already exist');
    }
  }

  return (
    <>
      <Header>
        <h1>Find the product</h1>
        <Button onClick={Logout} aria-label="Logout">
          <IoIosLogOut />
        </Button>
      </Header>
      {confirmDelete.isOpen === true && (
        <Modal
          heading="Delete item"
          onClose={() => setConfirmDelete({ isOpen: false })}
          onSave={() => deleteProduct(confirmDelete.product)}
          primaryBtn="Delete item"
        >
          This will remove the item on the list
        </Modal>
      )}

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
                aria-label="Edit"
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
              <Button
                aria-label="Delete"
                onClick={() =>
                  setConfirmDelete({ isOpen: true, product: product })
                }
                ghost
                title="Are you sure you want to delete"
              >
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
