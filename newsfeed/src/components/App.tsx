import * as React from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import LoadingSpinner from "./LoadingSpinner";
import AppContainer from "./AppContainer";

export default function App(): React.ReactElement {
  return (
    <RelayEnvironment>
      <React.Suspense fallback={<LoadingSpinner />}>
        <AppContainer />
      </React.Suspense>
    </RelayEnvironment>
  );
}
