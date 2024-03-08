/**
 * @generated SignedSource<<382eb5a255fe92f11cc50981cc0855b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SidebarFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment" | "ViewerProfileFragment">;
  readonly " $fragmentType": "SidebarFragment";
};
export type SidebarFragment$key = {
  readonly " $data"?: SidebarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SidebarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SidebarFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ViewerProfileFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContactsListFragment"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "4307386a933eb83e23b89a5a9716e523";

export default node;
