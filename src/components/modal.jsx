import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    marginBottom: 100
  },
});

class MuiModal extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Spoiler Alert!</DialogTitle>
          <DialogContent>
            <DialogContentText>The character Bruce Willis is playing is already dead. That is why only the boy who can "see dead people" is able to interact with him.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Gatsby.js & Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          SSR Material-UI starter with Gatsby.js
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
            Spoiler
        </Button>
      </div>
    );
  }
}

MuiModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MuiModal)
