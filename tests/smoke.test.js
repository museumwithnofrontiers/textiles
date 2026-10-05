import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'textiles',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Textiles',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '0e4485e1-3fb0-5d8c-a83c-5315bc85cb66',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '7f2fed78-da3c-5a60-9d84-6fa3d3fadd64',
    dynasty: {
      item: '4ce02a11-07e9-50f5-a7d7-3651d7dd3510',
      name: 'Abbasids',
    },
    timeline: {
      code: 'uk',
      id: 'gbr',
      country: 'United Kingdom',
    },
    partner: {
      id: '113e7cf6-f7c2-53aa-9442-5229ced56c72',
      name: 'Museum Rietberg',
      city: 'Zurich',
      country: 'Switzerland',
      objects: 3,
    },
  },
})
