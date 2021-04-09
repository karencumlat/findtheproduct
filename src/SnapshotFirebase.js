import React, { useState, useEffect, useContext } from 'react';
import firebase from './firebase';
import { v4 as uuidv4 } from 'uuid';
import { IoMdTrash, IoMdCreate } from 'react-icons/io';

import aisles from './components/helpers/aisles';

import { AuthContext } from './authy/Auth';

import { ProductTile } from './styles.js';
import Button from './components/Button';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Search from './components/Search';
import Select from './components/Select';
import TextInput from './components/TextInput';
import Tile from './components/Tile';
import Checkbox from './components/Checkbox';

function SnapshotFirebase() {
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser ? currentUser.uid : null;
  const currentUserEmail = currentUser ? currentUser.email : null;

  const [products, setProducts] = useState([]);
  const [shoppinglist, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aisle, setAisle] = useState('');
  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [editOpen, isEditOpen] = useState(false);

  const ref = firebase.firestore().collection('products');
  const shoppingListRef = firebase.firestore().collection('shoppinglist');

  //REALTIME GET FUNCTION
  function getProducts() {
    setLoading(true);
    ref
      //.where('owner', '==', currentUserId)
      //.where('aisle', '==', 'product1') // does not need index
      //.where('score', '<=', 10)    // needs index
      .orderBy('aisle', 'asc')
      //.limit(3)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setProducts(items);
        setLoading(false);
      });
  }

  function getShoppingList() {
    setLoading(true);
    setShoppingList([]);
    shoppingListRef
      .where('owner', '==', currentUserId)
      .orderBy('aisle', 'asc')
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setShoppingList(items);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
    getShoppingList();
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

  function addToList(e) {
    const itemID = e.target.value;

    var item = products.filter((product) => product.id === itemID);

    const owner = currentUser ? currentUser.uid : 'unknown';
    const ownerEmail = currentUser ? currentUser.email : 'unknown';

    const newProduct = {
      aisle: item[0].aisle,
      item: item[0].item,
      id: item[0].id,
      checkedState: false,
      owner,
      ownerEmail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };

    shoppingListRef
      .doc(newProduct.id)
      .set(newProduct)
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  function clearList() {
    shoppingListRef
      .where('owner', '==', currentUserId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  }

  function removeCheckedItems() {
    shoppingListRef
      .where('owner', '==', currentUserId)
      .where('checkedState', '==', true)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  }

  function deleteProduct(product) {
    ref
      .doc(product.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteItem(product) {
    shoppingListRef
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
  function editCheckedState(e, product) {
    const isChecked = e.target.checked;
    const updatedproduct = {
      checkedState: isChecked,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };
    console.log(product.id, isChecked);
    setLoading();
    shoppingListRef
      .doc(product.id)
      .update(updatedproduct)
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      {currentUserEmail === process.env.REACT_APP_ADMIN_EMAIL ? (
        <>
          <Search items={products} />
          {newItem === true ? (
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
          ) : (
            ''
          )}
          {editOpen === true ? (
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
      ) : currentUser !== null ? (
        <>
          <Search
            items={products}
            onClick={addToList}
            placeholder="+ Add an item"
          />
          {loading ? <Loading /> : null}
          <ProductTile>
            {shoppinglist.map((product) => (
              <Tile key={product.id} className="product-tile--item">
                <Checkbox
                  checkedState={product.checkedState}
                  labelName={product.item}
                  onChange={(e) => editCheckedState(e, product)}
                />

                <span className="product-tile-buttons">
                  <Button onClick={() => deleteItem(product)} ghost>
                    <IoMdTrash />
                  </Button>
                </span>
              </Tile>
            ))}
          </ProductTile>
          <Button
            onClick={() => {
              clearList();
              setTimeout(window.location.reload(), 3000);
            }}
          >
            Clear list
          </Button>
          <Button secondary onClick={() => removeCheckedItems()}>
            Remove checked items
          </Button>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default SnapshotFirebase;
