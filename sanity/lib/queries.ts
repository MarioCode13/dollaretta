import { defineQuery } from "next-sanity"

export const ISSUES_QUERY = defineQuery(`*[_type == "issue"] | order(chapter asc) {
  _id, 
  chapter,
  title, 
  slug,
  description, 
  image,
  amazonLink
}`)


export const ISSUE_BY_ID_QUERY =
  defineQuery(`*[_type == "issue" && _id == $id][0]{
  _id, 
  chapter,
  title, 
  slug,
  description, 
  image,
  amazonLink
}`)

export const CHARACTERS_QUERY = defineQuery(`*[_type == "character"] | order(id asc) {
  _id, 
  id,
  name,
  nickname, 
  slug,
  description, 
  image,
  descriptionImage
}`)

export const CHARACTER_BY_ID_QUERY =
  defineQuery(`*[_type == "character" && _id == $id][0]{
  _id, 
  id,
  name,
  nickname, 
  slug,
  description, 
  image,
  descriptionImage
}`)