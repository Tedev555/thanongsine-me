import React, { Component } from 'react';
import './HomeArticle.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArticleCard from './ArticleCard';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class HomeArticle extends Component {
    state = {
        spacingtest: '24',
    }

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { spacingtest } = this.state;

        return (
            <div className="HomePage-article-section">
                <h3>Articles</h3>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className={classes.demo} justify="center" spacing={Number(spacingtest)}>
                            {[0, 1, 2].map(value => (
                                <Grid key={value} item>
                                    <ArticleCard />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

HomeArticle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeArticle);