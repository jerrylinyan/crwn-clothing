import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionErrorFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  // return (dispatch) => {
  //   const collectionRef = firestore.collection("collections");
  //   dispatch(fetchCollectionsStart());
  //   collectionRef
  //     .get()
  //     .then((snapShot) => {
  //       // console.log(snapShot);
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
  //       // console.log(collectionMaps);
  //       dispatch(fetchCollectionSuccess(collectionsMap));
  //       // this.setState({ loading: false });
  //     })
  //     .catch((error) => dispatch(fetchCollectionErrorFailure(error.message)));
  // };
};
