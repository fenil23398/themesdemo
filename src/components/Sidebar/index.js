import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
          menu: {
              components : false,
              utilities  : false 
          },
          sidebarCollapsed  : false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
      toggleMenu(arg){
        this.setState({ menu: {
            ...this.state.menu,
            [arg] : !this.state.menu[arg]
        } })
      }
      sidebarCollapsedChanged = () => {
          this.setState({
              sidebarCollapsed : !this.state.sidebarCollapsed
          })
      }
    render() {
        const showComponent = (this.state.menu.components) ? "show" : "" ;
        const showUtilities = (this.state.menu.utilities) ? "show" : "";
        const sidebarView = (this.state.sidebarCollapsed) ? "toggled" : "";
        return (
            <div>
                <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + sidebarView} id="accordionSidebar">

                    {/* Sidebar - Brand */}
                    <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/home">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </NavLink>

                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />

                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></NavLink>
                    </li>

                    {/* Divider */}
                    <hr className="sidebar-divider" />

                    {/* Heading */}
                    <div className="sidebar-heading">
                        Interface
                    </div>

                    {/* Nav Item - Pages Collapse Menu */}
                    <li class="nav-item">
                        <button
                         className="nav-link collapsed button-background"
                          data-toggle="collapse"
                           data-target="#collapseTwo"
                           onClick = {() => this.toggleMenu('components')} 
                           aria-expanded="true" 
                            aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </button>
                        <div id="collapseTwo"  className={"collapse navbar-collapse " + showComponent} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Custom Components:</h6>
                                <NavLink className="collapse-item" to="/notFound">Buttons</NavLink>
                                <NavLink className="collapse-item" to="/notFound">Cards</NavLink>
                            </div>
                        </div>
                    </li>

                    {/* Nav Item - Utilities Collapse Menu */}
                    <li className="nav-item">
                        <button className="nav-link collapsed button-background" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true"
                            aria-controls="collapseUtilities"
                            onClick={() => this.toggleMenu('utilities')}>
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </button>
                        <div id="collapseUtilities" className={"collapse navbar-collapse " + showUtilities} aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <NavLink className="collapse-item" to="/notFound">Colors</NavLink>
                                <NavLink className="collapse-item" to="/notFound">Borders</NavLink>
                                <NavLink className="collapse-item" to="/notFound">Animations</NavLink>
                                <NavLink className="collapse-item" to="/notFound">Other</NavLink>
                            </div>
                        </div>
                    </li>

                    {/* Divider */}
                    <hr className="sidebar-divider" />

                    {/* Heading */}
                    <div className="sidebar-heading">
                        Addons
                    </div>

                    {/* Nav Item - Pages Collapse Menu */}
                  

                    {/* Nav Item - Charts */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/form1">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Add Income</span></NavLink>
                    </li>

                    {/* Nav Item - Tables */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/notFound">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span></NavLink>
                    </li>

                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block" />

                    {/* Sidebar Toggler (Sidebar) */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0"
                         id="sidebarToggle"
                         onClick = {() => this.sidebarCollapsedChanged()}></button>
                    </div>

                </ul>
            </div>
        )
    }
}
