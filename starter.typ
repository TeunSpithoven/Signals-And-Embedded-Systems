// CHANGE THIS TO THE CORRECT PATH
#import "./template/fhict-template.typ": *
#import "./components/terms.typ": term_list

#show: fhict_doc.with(
  title: "",
  subtitle: "",
  authors: (
    (
      name: "dsdss",
    ),
  ),
  version-history: (
    (
      version: "",
      date: "",
      author: [ddd],
      changes: "",
    ),
  ),
  pre-toc: [#include "./components/pre-toc.typ"],
  // bibliography-file: "my-sources.bib",
  glossary-terms: term_list,
)

Hoi @banaan
