import React from 'react';
import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import "./Book.css";

const Book = props => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <main>
            <Container className="form-container" maxWidth="sm">
                <Paper elevation={2}>
                    <form className="box-wrapper" noValidate>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography color="primary" variant="h4" style={styles.title}>
                                    Book an Appointment
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Name"
                                variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Phone"
                                variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Select date"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                        <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Select time"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                key={"Request an appointment"}
                                variant="contained"
                                color="primary"
                                style={{ width: "100%", marginTop: 15, marginBottom: 20 }}>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </main>
    );
};

const styles = {
    title: {
        fontFamily: "Pacifico, sans-serif",
        display: "inline-block"
    }
};

export default Book;