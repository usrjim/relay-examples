/**
 * @generated SignedSource<<de746c91558c67eaa2e7fc5f530119c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedFragment$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
  readonly " $fragmentType": "NewsfeedFragment";
}>;
export type NewsfeedFragment$key = ReadonlyArray<{
  readonly " $data"?: NewsfeedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewsfeedFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "NewsfeedFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StoryFragment"
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "8cbd43df1ce4f96c3f3b2b4b165f1b16";

export default node;
