import React, { Component, useState } from 'react'
import PlotLyGraphic from '../PlotLyGraph/index'
import MultiLine from '../MultiLine/index'
import DyGraph from '../DyGraph/index'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import { Dropdown } from 'react-bootstrap'

// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css'
import { CSVLink, CSVDownload } from 'react-csv'
import { FaFileDownload } from 'react-icons/fa'
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Charts extends Component {
  render () {
    const csvData = [
      ['firstname', 'lastname', 'email'],
      ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
      ['Raed', 'Labes', 'rl@smthing.co.com'],
      ['Yezzi', 'Min l3b', 'ymin@cocococo.com']
    ]
    return (
      <div className='container-fluid'>
        <div className='card shadow'>
          <div className='card-body'>
            <div className='row'>
              <div className='mb-3 ml-3'>
                <DateRangePicker startDate='11/1/2013' endDate='3/1/2014'>
                  <button>MM-DD-YYYY</button>
                </DateRangePicker>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-6 col-lg-6'>
                <div className='card shadow'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-xl-10 col-lg-10'>
                        <div class='rightButtonPanel mb-3'>
                          <div class='btn-group rightPosition'>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Hour
                            </button>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Day
                            </button>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Week
                            </button>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Month
                            </button>
                            <button
                              type='button'
                              class='noBorder fullHeight chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Year
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='drpdwn'>
                        <div className='col-xl-5 col-lg-5'>
                          <Dropdown>
                            <Dropdown.Toggle
                              // variant='success'
                              id='dropdown-basic'
                            >
                              Select
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href='#/action-1'>
                                Hour
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-1'>
                                Day
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-1'>
                                Week
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-2'>
                                Month
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-3'>
                                Year
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className='col-xl-2 col-lg-2'>
                        <CSVLink data={csvData}>
                          <FaFileDownload style={{ color: 'black' }} />
                        </CSVLink>
                      </div>
                    </div>
                    {/* <div className="chart-area"> */}
                    <PlotLyGraphic />
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6'>
                <div className='card shadow'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-xl-10 col-lg-10'>
                        <div class='rightButtonPanel mb-3'>
                          <div class='btn-group rightPosition'>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Hour
                            </button>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Day
                            </button>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Week
                            </button>
                            <button
                              type='button'
                              class='noBorder rightBorder chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Month
                            </button>
                            <button
                              type='button'
                              class='noBorder fullHeight chartButton'
                              ng-click=''
                              ng-disabled=''
                            >
                              Year
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='drpdwn'>
                        <div className='col-xl-2 col-lg-2'>
                          <Dropdown>
                            <Dropdown.Toggle
                              // variant='success'
                              id='dropdown-basic'
                            >
                              Select
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href='#/action-1'>
                                Hour
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-1'>
                                Day
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-1'>
                                Week
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-2'>
                                Month
                              </Dropdown.Item>
                              <Dropdown.Item href='#/action-3'>
                                Year
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className='col-xl-2 col-lg-2'>
                        <CSVLink data={csvData}>
                          <FaFileDownload style={{ color: 'black' }} />
                        </CSVLink>
                      </div>
                    </div>
                    {/* <div className="chart-area"> */}
                    <MultiLine />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts
