import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";
import CollectionPageContainer from "../collection/collection.container";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isLoading: true,
  //   };
  // }
  // state = {
  //   loading: true,
  // };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // // fetch(
    // //   "https://firestore.googleapis.com/v1/projects/crwn-db-4ae85/databases/(default)/documents/collections"
    // // )
    // //   .then((response) => response.json())
    // //   .then((response) => console.log(response));
    // collectionRef.get().then((snapShot) => {
    //   // console.log(snapShot);
    //   const collectionMaps = convertCollectionsSnapshotToMap(snapShot);
    //   // console.log(collectionMaps);
    //   updateCollections(collectionMaps);
    //   this.setState({ loading: false });
    // });
    // collectionRef.onSnapshot(async (snapShot) => {
    //   // console.log(snapShot);
    //   const collectionMaps = convertCollectionsSnapshotToMap(snapShot);
    //   // console.log(collectionMaps);
    //   updateCollections(collectionMaps);
    //   this.setState({ loading: false });
    // });
  }
  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        {/* <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        /> */}
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        {/* <Route
          path={`${match.path}/:collectionId`}
          render={(props)=>(<CollectionPageWithSpinner isLoading={loading} {...props}/>)}
        /> */}
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
// isCollectionFetching: selectIsCollectionFetching,
// isCollectionLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(withRouter(ShopPage));
