import React, { Component } from "react";
import Layout from '../../../components/Layout'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import {Link, Router} from '../../../routes'

class RequestNew extends Component {

  state = {
    value: '',
    recipient: '',
    description: '',
    errorMessage: '',
    loading: false,
  }

  static async getInitialProps(props) {
    const {address} = props.query

    return {address}
  }


  onSubmit = async (e) => {
    e.preventDefault()

    this.setState({ loading: true, errorMessage: '' })

    const campaign = Campaign(this.props.address)
    const {value, description, recipient} = this.state

    try {
      const accounts = await web3.eth.getAccounts()
      await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient).send({
          from: accounts[0]
        })
      Router.pushRoute(`/campaigns/${this.props.address}/requests`)  
    } catch(err) {
      this.setState({ errorMessage: err.message })
    }

    this.setState({
      loading: false,
      value: '',
      recipient: '',
      description: '', 
    })

  }


  render() {
    return ( 
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
            Back
          </a>
        </Link>
        <h3>Create a Request</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value})}
              />
          </Form.Field>

          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value})}
              />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={e => this.setState({ recipient: e.target.value})}
              />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout>
    );
  }

}

export default RequestNew;


