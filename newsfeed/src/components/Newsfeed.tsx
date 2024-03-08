import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { NewsfeedFragment$key } from "./__generated__/NewsfeedFragment.graphql";

const NewsfeedFragment = graphql`
  fragment NewsfeedFragment on Story @relay(plural: true) {
    id
    ...StoryFragment
  }
`;

export type Props = {
  topStories: NewsfeedFragment$key;
};

export default function Newsfeed({ topStories }: Props) {
  const stories = useFragment(NewsfeedFragment, topStories);
  return (
    <div className="newsfeed">
      {stories.map(story => (
        <Story
          key={story.id}
          story={story}
        />)
      )}
    </div>
  );
}
