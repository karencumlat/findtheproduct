import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../firebase';
import { IoMdTrash } from 'react-icons/io';

import { AuthContext } from '../../authy/Auth';
import Logout from '../../authy/Logout';

import { ProductTile } from './styles.js';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import OverflowMenu from '../../components/OverflowMenu';
import Search from '../../components/Search';
import Tile from '../../components/Tile';

function User() {
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser ? currentUser.uid : null;

  const ref = firebase.firestore().collection('products');
  const shoppingListRef = firebase.firestore().collection('shoppinglist');

  const [products, setProducts] = useState([]);
  const [shoppinglist, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setConfirmDelete({ isOpen: false });
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

  function deleteItem(product) {
    shoppingListRef
      .doc(product.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editCheckedState(e, product) {
    const isChecked = e.target.checked;
    const updatedproduct = {
      checkedState: isChecked,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };

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
      <Header>
        <h1>Shopping list</h1>
        <OverflowMenu aria-label="Overflow Menu">
          <OverflowMenu.Item
            label="Remove checked items"
            onClick={() => removeCheckedItems()}
          />
          <OverflowMenu.Item
            label="Clear list"
            isDanger
            onClick={() => {
              setConfirmDelete({ isOpen: true });
            }}
          />
          <OverflowMenu.Item label="Logout" hasDivider onClick={Logout} />
        </OverflowMenu>
      </Header>
      <Search
        items={products}
        onClick={addToList}
        selected={shoppinglist}
        placeholder="+ Add an item"
      />
      {loading ? <Loading /> : null}
      {confirmDelete.isOpen === true && (
        <Modal
          heading="Clear list"
          onClose={() => setConfirmDelete({ isOpen: false })}
          onSave={() => {
            clearList();
            alert('list successfully deleted');
          }}
          primaryBtn="Clear list"
        >
          This will remove all items on your list.
        </Modal>
      )}
      <ProductTile>
        {shoppinglist.length < 1 ? (
          <div className="product-tile--empty">
            <img
              src={process.env.PUBLIC_URL + '/images/watermelon01.svg'}
              alt="watermelon illustration"
              className="user--illustration"
            />
            <p>
              Start building your list! Add your items and it will itemize it by
              aisle.
            </p>
          </div>
        ) : (
          shoppinglist.map((product) => (
            <Tile key={product.id} className="product-tile--item">
              <Checkbox
                checkedState={product.checkedState}
                labelName={`${product.item} (${product.aisle})`}
                onChange={(e) => editCheckedState(e, product)}
              />

              <span className="product-tile-buttons">
                <Button
                  aria-label="Delete"
                  onClick={() => deleteItem(product)}
                  ghost
                >
                  <IoMdTrash />
                </Button>
              </span>
            </Tile>
          ))
        )}
      </ProductTile>
    </>
  );
}

export default User;
