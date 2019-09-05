import { SynapseConfig } from '../../types/portal-config'
import { GenericCardSchema } from "synapse-react-client/dist/containers/GenericCard"
import loadingScreen from '../loadingScreen'
import { SynapseConstants } from "synapse-react-client"

const computationalSchema: GenericCardSchema = {
  type: 'TOOL',
  title: 'name',
  subTitle: 'softwareType',
  description: 'summary',
  icon: 'toolType',
  secondaryLabels: [
    'contributor',
    'program',
    'grant',
    'documentation'
  ],
  link: 'url',
}

const experimentalSchema: GenericCardSchema = {
  type: 'TOOL',
  title: 'name',
  subTitle: 'reagentType',
  description: 'summary',
  icon: 'toolType',
  secondaryLabels: [
    'contributor',
    'diagnosis',
    'modelType',
    'modelSystemName',
    'grant',
    'program',
  ],
  link: 'url',
}

const facetAliases = {
  diagnosis: 'Diagnosis',
  grant: 'Grant',
  modelSystemName: 'Model Name',
  modelType: 'Model Type',
  program: 'Program',
  reagentType: 'Reagent Type',
  softwareType: 'Software Type',
  contributor: 'Contributor',
  displayName: 'Display Name',
  summary: 'Summary'
}

const computationalSql = "SELECT * FROM syn20337467 WHERE toolType = 'computational'"
const experimentalSql = "SELECT * FROM syn20337467 WHERE toolType = 'experimental'"
const searchConfiguration = {
  searchable: [
    {
      columnName: 'contributor',
      hintText: 'LastName'
    },
    {
      columnName: 'diagnosis',
      hintText: 'LOAD'
    },
    {
      columnName: 'displayName',
      hintText: 'APOE4'
    },
    {
      columnName: 'grant',
      hintText: 'U01AG046139'
    },
    {
      columnName: 'modelSystemName',
      hintText: 'APP'
    },
    {
      columnName: 'modelType',
      hintText: 'Trem2'
    },
    {
      columnName: 'program',
      hintText: 'MODEL-AD'
    },
    {
      columnName: 'reagentType',
      hintText: 'Mouse'
    },
    {
      columnName: 'softwareType',
      hintText: 'web application'
    },
    {
      columnName: 'summary',
      hintText: 'network'
    },
  ]
}
const tools: SynapseConfig = {
  name: 'QueryWrapperMenu',
  props: {
    rgbIndex: 6,
    facetAliases,
    accordionConfig: [
      {
        name: 'Computational',
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: computationalSchema,
          loadingScreen
        },
        searchConfiguration,
        menuConfig: [
          {
            sql: computationalSql,
            facet: 'diagnosis',
          },
          {
            sql: computationalSql,
            facet: 'grant'
          },
          {
            sql: computationalSql,
            facet: 'program'
          },
          {
            sql: computationalSql,
            facet: 'softwareType'
          },
          {
            sql: computationalSql,
          },
        ]
      },
      {
        name: 'Experimental',
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: experimentalSchema,
          loadingScreen
        },
        searchConfiguration,
        menuConfig: [
          {
            sql: experimentalSql,
            facet: 'diagnosis'
          },
          {
            sql: experimentalSql,
            facet: 'grant'
          },
          {
            sql: experimentalSql,
            facet: 'modelType'
          },
          {
            sql: experimentalSql,
            facet: 'program'
          },
          {
            sql: experimentalSql,
            facet: 'reagentType'
          },
          {
            sql: experimentalSql,
          },
        ]
      },
    ]
  }
}

export default tools