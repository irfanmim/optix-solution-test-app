import React from 'react'
import {Typography, Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ListOfJob from './ListOfJob'

const styles = {
    tableContainer: {
        marginBottom: 50,
    },
    addButton: {
        textAlign: 'right',
        marginTop: 5
    },
}

class DashboardMachineContent extends React.Component {
    render() {
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.tableContainer}>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography variant="h4" gutterBottom component="h2">
                                List of Job
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <ListOfJob key={[]} data={[]}/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DashboardMachineContent);