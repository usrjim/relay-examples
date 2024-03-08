import * as React from "react";
import Newsfeed from "./Newsfeed";
import Sidebar from "./Sidebar";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { AppContainerQuery as AppContainerQueryType } from "./__generated__/AppContainerQuery.graphql"

const AppContainerQuery = graphql`
  query AppContainerQuery {
    topStories {
      ...NewsfeedFragment
    }
    viewer {
      ...SidebarFragment
    }
  }
`;

export default function AppContainer(): React.ReactElement {
  const data = useLazyLoadQuery<AppContainerQueryType>(AppContainerQuery, {});

  return (
    <div className="app">
        <Newsfeed topStories={data.topStories} />
        <Sidebar viewer={data.viewer} />
    </div>
  );
}