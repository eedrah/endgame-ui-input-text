var React = require('react');

var LabelWrapper = require('./Wrappers/LabelWrapper');

var TextInput = React.createClass({
    propTypes: {
        disabled: React.PropTypes.bool,
        error: React.PropTypes.string,
        hint: React.PropTypes.string,
        label: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired,
        onEnterKeyUp: React.PropTypes.func,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.string
        ])
    },
    onChange: function (event) {
        this.props.onChange(event.target.value);
    },
    onKeyUp: function(event) {
        if (event.keyCode == 13 && this.props.onEnterKeyUp) {
            this.props.onEnterKeyUp();
        }
    },
    render: function() {
        return (
            <LabelWrapper
                error={this.props.error}
                hint={this.props.hint}
                disabled={this.props.disabled}
                label={this.props.label}
            >
                <input
                    {...this.props}
                    type="text"
                    error={null}
                    hint={null}
                    label={null}
                    onEnterKeyUp={null}
                    onKeyUp={this.onKeyUp}
                    onChange={this.onChange}
                />
            </LabelWrapper>
        );
    }
});

module.exports = TextInput;
