import React from 'react';
import getGenreName from '@/features/genres/getGenreName';
import { MovieTileTag } from '../styled';

const generateTags = (tagIds, genres) => {
  if (tagIds && genres) {
    const tags = tagIds.map((tagId) => getGenreName(tagId, genres));
    return tags.map((tag) => <MovieTileTag key={`${tag.id}`}>{tag}</MovieTileTag>);
  }
  return null;
};
export default generateTags;
