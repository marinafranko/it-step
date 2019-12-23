import React from "react";
import "./contactitem.css";

class ContactItem extends React.Component {

    state = {
        avatar: this.props.avatar,
        decription: this.props.decription,
        name: this.props.name,
        facebook: this.props.facebook,
        instagram: this.props.instagram,
        twitter: this.props.twitter,
        gender: this.props.gender,
        btnRandom: false,

        btnHover: false,
        btnLeave: false
    }


    onBtnPress = () => {
        const newAv = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        this.setState({
            avatar: newAv,
            btnRandom: !this.state.btnRandom
        })
    }



    onNameHover = () => {
        this.setState({
            btnHover: !this.state.btnHover
        })
    }

    onNameLeave = () => {
        this.setState({
            btnLeave: !this.state.btnLeave
        })
    }
    render() {

        const { decription, name, facebook, instagram, twitter } = this.state;
        const URL = `https://randomuser.me/api/portraits/${this.state.gender}/${this.state.avatar}.jpg `
        let btnStyle = "btn btn-success";
        let StarStyle = "fa fa-star-o";
        let HoverStyle = "info";

        if (this.state.btnRandom) {
            btnStyle = "btn btn-warning";
        }
        if (this.props.btnStar) {
            StarStyle = "fa fa-star";
        }
        if (this.state.btnHover) {
            HoverStyle = "info-hover";
        }
        if (this.state.btnLeave) {
            HoverStyle = "info";
        }

        return (
            <div className="row">
                <div className="col-8 d-block mx-auto">
                    <div className="panel">
                        <div className="panel-body p-t-10">
                            <div className="media-main">
                                <a className="pull-left" href="#">
                                    <img className="thumb-lg img-circle bx-s" src={URL} alt="" />
                                </a>
                                <div className="pull-right btn-group-sm">
                                    <a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                        <i className="fa fa-pencil"></i>
                                    </a>
                                    <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                        <i className="fa fa-close" onClick={this.props.onDelete}></i>
                                    </a>
                                </div>
                                <div >
                                    <h4 className={HoverStyle} onMouseEnter={this.onNameHover} onMouseLeave={this.onNameLeave}>{name}</h4>

                                    <p className="text-muted">{decription}</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <ul className="socialIcons">
                                <li className="facebook"><a href={facebook}><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>
                                <li className="twitter"><a href={twitter}><i className="fa fa-fw fa-twitter"></i>Twitter</a></li>
                                <li className="instagram"><a href={instagram}><i className="fa fa-fw fa-instagram"></i>Instagram</a></li>

                            </ul>


                            <button type="button" className={btnStyle} onClick={this.onBtnPress}>Random Face</button>
                            <i className={StarStyle} onClick={this.props.onStarClick}></i>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactItem;