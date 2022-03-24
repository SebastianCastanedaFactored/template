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
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title as TitleChart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Bar, Radar } from 'react-chartjs-2'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    TitleChart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [44, 95, 30, 2, 38, 23],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [43, 62, 94, 37, 10, 64],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
}

const data2 = {
    labels: ['Python', 'MySQL', 'Javascript', 'TensorFlow', 'PyTorch', 'OpenCV'],
    datasets: [
        {
            label: 'Skills',
            data: [73, 81, 88, 75, 67, 93],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

export default function CustomChartJS(){
    return(
        <MasterPage>
            <Title value="Charts" />
            <Subtitle value="Charts from Chart.js" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <CustomCard>
                        <Bar options={options} data={data} />
                    </CustomCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomCard>
                        <Radar data={data2} />
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}