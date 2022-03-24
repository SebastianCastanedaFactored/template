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

import { Arc } from '@visx/shape';
import { Chord, Ribbon } from '@visx/chord';
import { scaleOrdinal } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import { Group } from '@visx/group';
import { Tree, hierarchy } from '@visx/hierarchy';
import { HierarchyPointNode } from '@visx/hierarchy/lib/types';
import { LinkHorizontal } from '@visx/shape';

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from '../components/cards';

const pink = '#ff2fab';
const orange = '#ffc62e';
const purple = '#dc04ff';
const purple2 = '#7324ff';
const red = '#d04376';
const green = '#52f091';
const blue = '#04a6ff';
const lime = '#00ddc6';
const bg = '#e4e3d8';
const peach = '#fd9b93';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';
const background = '#272b4d';

const dataMatrix = [
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907],
];

const descending = (a, b) => {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

const color = scaleOrdinal({
    domain: [0, 1, 2, 3],
    range: ['url(#gpinkorange)', 'url(#gpurplered)', 'url(#gpurplegreen)', 'url(#gbluelime)'],
});

const rawTree = {
    name: 'T',
    children: [
        {
            name: 'A',
            children: [
                { name: 'A1' },
                { name: 'A2' },
                { name: 'A3' },
                {
                    name: 'C',
                    children: [
                        {
                            name: 'C1',
                        },
                        {
                            name: 'D',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        { name: 'Z' },
        {
            name: 'B',
            children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],
        },
    ],
};

function Node({ node }) {
    const width = 40;
    const height = 20;
    const centerX = -width / 2;
    const centerY = -height / 2;
    const isRoot = node.depth === 0;
    const isParent = !!node.children;
  
    if (isRoot) return <RootNode node={node} />;
    if (isParent) return <ParentNode node={node} />;
  
    return (
        <Group top={node.x} left={node.y}>
            <rect
                height={height}
                width={width}
                y={centerY}
                x={centerX}
                fill={background}
                stroke={green}
                strokeWidth={1}
                strokeDasharray="2,2"
                strokeOpacity={0.6}
                rx={10}
                onClick={() => {
                    alert(`clicked: ${JSON.stringify(node.data.name)}`);
                }}
            />
            <text
                dy=".33em"
                fontSize={9}
                fontFamily="Arial"
                textAnchor="middle"
                fill={green}
                style={{ pointerEvents: 'none' }}
            >
                {node.data.name}
            </text>
        </Group>
    );
}
  
function RootNode({ node }) {
    return (
        <Group top={node.x} left={node.y}>
            <circle r={12} fill="url('#lg')" />
            <text
                dy=".33em"
                fontSize={9}
                fontFamily="Arial"
                textAnchor="middle"
                style={{ pointerEvents: 'none' }}
                fill={plum}
            >
                {node.data.name}
          </text>
        </Group>
    );
}
  
function ParentNode({ node }) {
    const width = 40;
    const height = 20;
    const centerX = -width / 2;
    const centerY = -height / 2;
  
    return (
        <Group top={node.x} left={node.y}>
            <rect
                height={height}
                width={width}
                y={centerY}
                x={centerX}
                fill={background}
                stroke={blue}
                strokeWidth={1}
                onClick={() => {
                    alert(`clicked: ${JSON.stringify(node.data.name)}`);
                }}
            />
            <text
                dy=".33em"
                fontSize={9}
                fontFamily="Arial"
                textAnchor="middle"
                style={{ pointerEvents: 'none' }}
                fill={white}
            >
                {node.data.name}
          </text>
        </Group>
    );
}
  
const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

function ExampleChords({ width, height, centerSize = 20, events = false }) {
    height -= 77
    const outerRadius = Math.min(width, height) * 0.5 - (centerSize + 10);
    const innerRadius = outerRadius - centerSize;
  
    return width < 10 ? null : (
        <svg width={width} height={height}>
            <LinearGradient id="gpinkorange" from={pink} to={orange} vertical={false} />
            <LinearGradient id="gpurplered" from={purple} to={red} vertical={false} />
            <LinearGradient id="gpurplegreen" from={purple2} to={green} vertical={false} />
            <LinearGradient id="gbluelime" from={blue} to={lime} vertical={false} />
            <rect width={width} height={height} fill={bg} rx={14} />
            <Group top={height / 2} left={width / 2}>
                <Chord matrix={dataMatrix} padAngle={0.05} sortSubgroups={descending}>
                    {({ chords }) => (
                        <g>
                            {chords.groups.map((group, i) => (
                                <Arc
                                    key={`key-${i}`}
                                    data={group}
                                    innerRadius={innerRadius}
                                    outerRadius={outerRadius}
                                    fill={color(i)}
                                    onClick={() => {
                                        if (events) alert(`${JSON.stringify(group)}`);
                                    }}
                                />
                            ))}
                            {chords.map((chord, i) => {
                                return (
                                    <Ribbon
                                        key={`ribbon-${i}`}
                                        chord={chord}
                                        radius={innerRadius}
                                        fill={color(chord.target.index)}
                                        fillOpacity={0.75}
                                        onClick={() => {
                                            if (events) alert(`${JSON.stringify(chord)}`);
                                        }}
                                    />
                                );
                            })}
                        </g>
                    )}
                </Chord>
            </Group>
        </svg>
    );
}

function ExampleTree({ width, height, margin = defaultMargin }) {
    const data = React.useMemo(() => hierarchy(rawTree), []);
    const yMax = height - margin.top - margin.bottom;
    const xMax = width - margin.left - margin.right;
  
    return width < 10 ? null : (
        <svg width={width} height={height}>
          <LinearGradient id="lg" from={peach} to={pink} />
          <rect width={width} height={height} rx={14} fill={background} />
          <Tree root={data} size={[yMax, xMax]}>
              {(tree) => (
                  <Group top={margin.top} left={margin.left}>
                      {tree.links().map((link, i) => (
                          <LinkHorizontal
                              key={`link-${i}`}
                              data={link}
                              stroke={lightpurple}
                              strokeWidth="1"
                              fill="none"
                          />
                      ))}
                      {tree.descendants().map((node, i) => (
                          <Node key={`node-${i}`} node={node} />
                      ))}
                  </Group>
              )}
          </Tree>
        </svg>
    );
}

export default function Visx(){
    return(
        <MasterPage>
            <Title value="Charts" />
            <Subtitle value="Charts from VisX by Airbnb" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomCard>
                        <ParentSize>{({ width, height }) => <ExampleChords width={width} height={width} />}</ParentSize>
                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard>
                        <ParentSize>{({ width, height }) => <ExampleTree width={width} height={width} />}</ParentSize>
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}