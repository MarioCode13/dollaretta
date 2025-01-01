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