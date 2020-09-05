import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import FormModal from './components/modals/Modal'
import DataTable from './components/tables/DataTable'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as contactActions from './actions/contactActions'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
      ...this.state.items.splice(itemIndex, 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }


  render() {

    // console.log(this.props.contacts)
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>CRUD Database - Mirrored to Local State</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.props.contacts} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormModal buttonLabel="Add Item" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

App.propTypes = {
  contacts: PropTypes.array.isRequired
}

App.defaultProps = {
  contacts: []
}


const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, null)(App)