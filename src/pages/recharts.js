import * as React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Button,
    ButtonBase,
    Checkbox,
    CircularProgress,
    Collapse,
    Container,
    CssBaseline,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Select,
    Slider,
    Snackbar,
    Stack,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Tab,
    Tabs,
    Toolbar,
    Tooltip as MaterialTootltip,
    Typography,
} from '@mui/material'
import Icon from '@mui/material/Icon'

import {
    LineChart,
    BarChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function Recharts(){
    return(
        <MasterPage>
            <Title value="Charts" />
            <Subtitle value="Charts from Recharts" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomCard>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={50}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="rgba(255, 99, 132, 0.5)" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="rgba(53, 162, 235, 0.5)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard>
                        <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" stackId="a" fill="rgba(255, 99, 132, 0.5)" />
                            <Bar dataKey="uv" stackId="a" fill="rgba(53, 162, 235, 0.5)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}