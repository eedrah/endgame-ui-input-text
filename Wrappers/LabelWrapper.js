require('./LabelWrapper.scss');

var React = require('react');
var classnames = require('classnames');

var LabelWrapper = React.createClass({
    propTypes: {
        children: React.PropTypes.node.isRequired,
        disabled: React.PropTypes.bool,
        error: React.PropTypes.string,
        hint: React.PropTypes.string,
        label: React.PropTypes.string
    },
    render: function() {
        var errorOrHint = null;
        if (this.props.error) {
            errorOrHint = (
                <span className="LabelWrapper-error" title={this.props.error} />
            );
        } else if (this.props.hint) {
            errorOrHint = (
                <span className="LabelWrapper-hint" title={this.props.hint} />
            );
        }

        return (
            <label className={classnames("LabelWrapper", {"LabelWrapper--invalid": this.props.error})}>
                <div className="LabelWrapper-label">
                    {this.props.label}
                    {errorOrHint}
                </div>
                {this.props.children}
            </label>
        );
    }
});

module.exports = LabelWrapper;
