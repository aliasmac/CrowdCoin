import React from 'react'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm'
import {Link} from '../../routes'


class CampaignShow extends React.Component {


  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address)
    const summary = await campaign.methods.getSummary().call()
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address
    }
  }

  renderCards = () => {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager
    } = this.props

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'A manager created this camapign and can create requests to withdraw money', 
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'you must contribute at least this much wei to become an approver' 
      },
      {
        header: requestsCount,
        meta: 'Number of Request',
        description: 'A request tries to withdraw money from the contract. Request must be approved by approvers'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign', 
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: "Campaign Balance (ether)",
        description: "The balance is how much this campaign has left to spend"
      }

    ]

    return <Card.Group items={items} />
  }

  render() {
    return (
    <Layout>
      <h3>Campaign Show</h3>
      <Grid>

        <Grid.Row>
          <Grid.Column width={10}>
            {this.renderCards()}
            
          </Grid.Column>

          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button primary >
                  View Requests
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
        

      </Grid>
    </Layout>  
    )
  }
}

export default CampaignShow;