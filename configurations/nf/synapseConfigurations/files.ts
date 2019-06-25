import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from '../../types/portal-config'
import loadingScreen from '../loadingScreen'

const facetAliases = {
  id: 'File ID',
  assay: 'Assay',
  dataType: 'Data Type',
  diagnosis: 'Diagnosis',
  tumorType: 'Tumor Type',
  species: 'Species',
  individualID: 'Individual ID',
  fileFormat: 'File Format',
  dataSubtype: 'Data Subtype',
  nf1Genotype: 'NF1 Genotype',
  nf2Genotype: 'NF2 Genotype',
  fundingAgency: 'Funding Agency',
  consortium: 'Consortium',
  name: 'File Name',
  studyName: 'Study Name',
}

const rgbIndex = 8
const unitDescription = 'Files'
const title = 'Files'
const visibleColumnCount = 7
const synapseId = 'syn16858331'

const files: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperWithStackedBarChart',
    props: {
      rgbIndex,
      unitDescription,
      loadingScreen,
      initQueryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
          | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
          | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          isConsistent: false,
          limit: 25,
          offset: 0,
          sql: "SELECT * FROM syn16858331 WHERE resourceType = 'experimentalData'",
        }
      },
      facetName: 'assay',
      facetAliases: {
        assay: 'Assay',
      },
    }
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperMenu',
    props: {
      rgbIndex,
      facetAliases,
      loadingScreen,
      unitDescription,
      tableConfiguration: {
        title,
        visibleColumnCount,
        facetAliases,
        synapseId,
      },
      menuConfig: [
        {
          sql: `
            SELECT id AS "File ID", assay AS "Assay", dataType AS "Data Type", diagnosis AS "Diagnosis", tumorType AS "Tumor Type",  species AS "Species", individualID AS "Individual ID",  fileFormat AS "File Format", dataSubtype AS "Data Subtype", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name" FROM syn16858331 WHERE resourceType = 'experimentalData'
          `,
          facetName: 'assay'
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", dataType AS "Data Type", assay AS "Assay", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", species AS "Species", individualID AS "Individual ID", fileFormat AS "File Format", dataSubtype AS "Data Subtype", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'dataType'
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", tumorType AS "Tumor Type", diagnosis AS "Diagnosis", species AS "Species", individualID AS "Individual ID", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", dataType AS "Data Type", assay AS "Assay", fileFormat AS "File Format", dataSubtype AS "Data Subtype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'tumorType'
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", fileFormat AS "File Format", dataType AS "Data Type", assay AS "Assay", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", species AS "Species", individualID AS "Individual ID", dataSubtype AS "Data Subtype", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'fileFormat'
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", fundingAgency AS "Funding Agency", studyName AS "Study Name", consortium AS "Consortium", dataType AS "Data Type", assay AS "Assay", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", species AS "Species", fileFormat AS "File Format", individualID AS "Individual ID", dataSubtype AS "Data Subtype", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", name AS "File Name" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'fundingAgency'
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", nf1Genotype AS "NF1 Genotype", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", species AS "Species", individualID AS "Individual ID", dataType AS "Data Type", assay AS "Assay", fileFormat AS "File Format", dataSubtype AS "Data Subtype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name", nf2Genotype AS "NF2 Genotype" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'nf1Genotype',
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", nf2Genotype AS "NF2 Genotype", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", species AS "Species", individualID AS "Individual ID", dataType AS "Data Type", assay AS "Assay", fileFormat AS "File Format", dataSubtype AS "Data Subtype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name",  nf1Genotype AS "NF1 Genotype" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'nf2Genotype',
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", species AS "Species", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", individualID AS "Individual ID", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", dataType AS "Data Type", assay AS "Assay", fileFormat AS "File Format", dataSubtype AS "Data Subtype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'species',
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID", isCellLine AS "Is Cell Line", species AS "Species", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", individualID AS "Individual ID", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", dataType AS "Data Type", assay AS "Assay", fileFormat AS "File Format", dataSubtype AS "Data Subtype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'isCellLine'
        },
        {
          facetAliases,
          sql: `
            SELECT id AS "File ID",isMultiSpecimen AS "Is Multi-specimen", species AS "Species", diagnosis AS "Diagnosis", tumorType AS "Tumor Type", individualID AS "Individual ID", nf1Genotype AS "NF1 Genotype", nf2Genotype AS "NF2 Genotype", dataType AS "Data Type", assay AS "Assay", fileFormat AS "File Format", dataSubtype AS "Data Subtype", studyName AS "Study Name", fundingAgency AS "Funding Agency", consortium AS "Consortium", name AS "File Name" FROM syn16858331 where resourceType = 'experimentalData'
          `,
          facetName: 'isMultiSpecimen'
        },
      ]
    }
  }
}

export default files
