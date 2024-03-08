import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useLazyLoadQuery } from "react-relay";
import LoadingSpinner from "./LoadingSpinner";
import ViewerProfile from "./ViewerProfile";
import ContactsList from "./ContactsList";
import { SidebarFragment$key } from "./__generated__/SidebarFragment.graphql";

const SidebarFragment = graphql`
  fragment SidebarFragment on Viewer {
    ...ViewerProfileFragment
    ...ContactsListFragment
  }
`;

export type Props = {
  viewer: SidebarFragment$key;
};

export default function Sidebar({ viewer }: Props) {
  return (
    <div className="sidebar">
      <React.Suspense fallback={<LoadingSpinner />}>
        <SidebarContents viewer={viewer}/>
      </React.Suspense>
    </div>
  );
}

function SidebarContents({ viewer }: Props) {
  const data = useFragment(SidebarFragment, viewer);
  return (
    <>
      <ViewerProfile viewer={data} />
      <ContactsList viewer={data} />
    </>
  );
}
