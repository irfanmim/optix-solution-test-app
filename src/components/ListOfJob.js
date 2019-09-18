import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core'
import Axios from 'axios';

const styles = {
    root: {
      width: '100%',
      overflowX: 'auto',
      boxShadow: "none",
      border: "1px solid #E3E7E8",
    }
}

class ListOfJob extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading : false,
            data : this.props.data,
            error : null,
            modalOpen: false,
            shareEmail: ""
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    
    componentDidMount() {
        this.setState({...this.state, isLoading: true})
        
        Axios.get("http://localhost:8000/jobs")
        .then( response => 
        this.setState({
            ...this.state,
            isLoading : false, 
            data : response.data
        })
        )
        .catch(error => this.setState({...this.state, error, isLoading: false}))
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                            <TableCell>Name</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map(n => (
                                <TableRow key={n.id} style={{textDecoration: 'none'}}>
                                    <TableCell component="th" scope="row">{n.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    { this.state.data.length === 0 ? <Typography style={{textAlign: "center"}}>no job</Typography> : <div></div>}
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(ListOfJob);