import React from "react";
import "./contactitem.css";

const ContactItem = ({ name, decription, avatar, facebook, instagram, twitter }) => {
    // console.log(props);

    return (
        <div className="row">
            <div className="col-8 d-block mx-auto">
                <div className="panel">
                    <div className="panel-body p-t-10">
                        <div className="media-main">
                            <a className="pull-left" href="#">
                                <img className="thumb-lg img-circle bx-s" src={avatar} alt="" />
                            </a>
                            <div className="pull-right btn-group-sm">
                                <a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                    <i className="fa fa-pencil"></i>
                                </a>
                                <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                    <i className="fa fa-close"></i>
                                </a>
                            </div>
                            <div className="info">
                                <h4>{name}</h4>
                                <p className="text-muted">{decription}</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <ul className="socialIcons">
                        <li className="facebook"><a href={facebook}><i className="fa fa-fw fa-facebook"></i>Facebook</a></li> 
                        <li className="twitter"><a href={twitter}><i className="fa fa-fw fa-twitter"></i>Twitter</a></li> 
                        <li className="instagram"><a href={instagram}><i className="fa fa-fw fa-instagram"></i>Instagram</a></li> 
                        
                     </ul>
                     <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactItem;