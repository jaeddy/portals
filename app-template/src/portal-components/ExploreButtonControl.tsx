import * as React from 'react'
import { ExploreButtons, ExploreButtonProps, NamedRoute } from '../ExploreButtons'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SynapseObjectSingle } from '../types/portal-config'
import { generateSynapseObject } from '../RouteResolver'

export type ExploreButtonControlProps = {
  synapseObjectSingle: SynapseObjectSingle
  colors: string []
  // we have to pass in all the custom routes because unlike the home page the explore buttons configs aren't held in state
  customRoutes: NamedRoute []
}

export type ButtonControlState = {
  index: number
}

type InternalProps = RouteComponentProps & ExploreButtonControlProps

const ButtonControl:React.FunctionComponent<InternalProps> = ({ location, synapseObjectSingle, colors, history, customRoutes }) => {
  const pathname = location.pathname
  const subPath = pathname.substring('/Explore/'.length)
  const exploreButtonProps: ExploreButtonProps = {
    colors,
    customRoutes,
    handleChanges: (val: string, _index: number) => history.push(`/Explore/${val}`),
    isSelected: (name: string) => name === subPath,
  }
  /*
    We special case the rendering based on the use case for button control, whether it should retrieve data
    from props or through the URL.
  */
  return (
    <React.Fragment>
      <ExploreButtons
        {...exploreButtonProps}
      />
      <div className={'container explore'}>
        <div className="row">
          {
            generateSynapseObject(synapseObjectSingle)
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ButtonControl)
