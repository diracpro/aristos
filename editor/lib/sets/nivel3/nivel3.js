"use strict";

/*
Copyright [2014] [Diagramo]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

figureSets["nivel3"] = {
    name : 'Nivel 3',
    description : 'Elementos del tercer nivel',
    figures: [
        {figureFunction: "Rol", image: "Rol.png"},

        {figureFunction: "Page", image: "page.png"},
        {figureFunction: "PageLowerCornerFolded", image: "page_lower_corner_folded.png"},
        {figureFunction: "PageUpperCornerFolded", image: "page_upper_corner_folded.png"},
        {figureFunction: "SemiCircleDown", image: "semi_circle_down.png"},
        {figureFunction: "SemiCircleUp", image: "semi_circle_up.png"},
        {figureFunction: "Circle", image: "circle.png"},
        {figureFunction: "Triangle", image: "triangle.png"},
        {figureFunction: "Start", image: "start.png"},
        {figureFunction: "End", image: "end.png"},
        {figureFunction: "State", image: "state.png"},
        {figureFunction: "Note", image: "note.png"}
    ]
}

function figure_Rol(x,y)
{

    var f = new Figure("Rol");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;
    f.style.lineWidth = 2;
    f.style.lineStyle = Style.LINE_STYLE_CONTINOUS;

    this.x = 155; 
    this.y = 115;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));

    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    var p = new Path();
    var hShrinker = 20;
    var vShrinker = 40;
    var l1 = new Line(new Point(x + hShrinker, y + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker, y + vShrinker));

    var c1 = new QuadCurve(new Point(x + FigureDefaults.segmentSize - hShrinker, y + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner/FigureDefaults.cornerRoundness + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + vShrinker))

    var l2 = new Line(new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker));

    var c2 = new QuadCurve(new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10)),
        new Point(x + FigureDefaults.segmentSize - hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner))

    var l3 = new Line(new Point(x + FigureDefaults.segmentSize - hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner),
        new Point(x + hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner));

    var c3 = new QuadCurve(
        new Point(x + hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner),
        new Point(x + hShrinker - FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10)),
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker))

    var l4 = new Line(new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker),
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + vShrinker));

    var c4 = new QuadCurve(
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + vShrinker),
        new Point(x + hShrinker - FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + vShrinker),
        new Point(x + hShrinker, y + vShrinker))

    p.addPrimitive(l1);
    p.addPrimitive(c1);
    p.addPrimitive(l2);
    p.addPrimitive(c2);
    p.addPrimitive(l3);
    p.addPrimitive(c3);
    p.addPrimitive(l4);
    p.addPrimitive(c4);
    f.addPrimitive(p);

    var t2 = new Text("Rol", x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentShortSize/2 + FigureDefaults.corner, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    var wid = FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner;
    var height = FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner;
    //top
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 - 10, y + vShrinker), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2, y + vShrinker), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 + 10, y + vShrinker), ConnectionPoint.TYPE_FIGURE);

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid -2, y + height / 1.34 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid, y + height / 1.34), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid -2, y + height / 1.34 + 10), ConnectionPoint.TYPE_FIGURE);

    //bottom
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 - 10, y + height), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2, y + height), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 + 10, y + height), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + 2, y + height / 1.34 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + height / 1.34), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + 2, y + height / 1.34 + 10), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_Page(x,y)
{

    var r = new Polygon();
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4 - FigureDefaults.corner, y));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.corner));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize));
    r.addPoint(new Point(x, y + FigureDefaults.segmentSize));

    var f=new Figure("Page");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS);
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    f.addPrimitive(r);

    var t2 = new Text(FigureDefaults.textStr, x + FigureDefaults.segmentShortSize/2 + 2, y + FigureDefaults.segmentSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize / 2 + 2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize / 2 + 2, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize / 2 + 2, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_PageUpperCornerFolded(x,y)
{
    var r = new Polygon();
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4 - FigureDefaults.corner, y));
    r.addPoint(new Point(x, y));//tl
    r.addPoint(new Point(x, y + FigureDefaults.segmentSize));//bl
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize));//br
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.corner));//tl
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4 - FigureDefaults.corner, y + FigureDefaults.corner));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4 - FigureDefaults.corner, y+1));
    
    var l = new Line(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.corner),new Point(x + FigureDefaults.segmentShortSize + 4 - FigureDefaults.corner, y))
    var f=new Figure("PageUpperCornerFolded");
    f.addPrimitive(l);
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;
    f.style.lineCap = f.style.STYLE_LINE_CAP_ROUND;
    
    f.properties.push(new BuilderProperty('Text', 'primitives.2.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.2.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.2.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.2.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.2.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.2.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS);
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    f.addPrimitive(r);

    var t2 = new Text(FigureDefaults.textStr, x + FigureDefaults.segmentShortSize/2 + 2, y + FigureDefaults.segmentSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize/2 + 2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize + 2, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize/2 + 2, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize/2 + 2, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_PageLowerCornerFolded(x,y)
{

    var r = new Polygon();
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y));
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x, y + FigureDefaults.segmentSize));

    r.addPoint(new Point(x + FigureDefaults.segmentShortSize - FigureDefaults.corner + 4, y + FigureDefaults.segmentSize));
    //r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize - FigureDefaults.corner));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize - FigureDefaults.corner + 4, y + FigureDefaults.segmentSize - FigureDefaults.corner));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize - FigureDefaults.corner));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize - FigureDefaults.corner));

    var l = new Line(new Point(x + FigureDefaults.segmentShortSize - FigureDefaults.corner + 4, y + FigureDefaults.segmentSize),new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize - FigureDefaults.corner))
    var f=new Figure("PageUpperCornerFolded");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.addPrimitive(l);
    f.properties.push(new BuilderProperty('Text', 'primitives.2.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.2.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.2.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.2.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.2.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.2.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS);
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    f.addPrimitive(r);

    var t2 = new Text(FigureDefaults.textStr, x + FigureDefaults.segmentShortSize / 2 + 2, y + FigureDefaults.segmentSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize / 2 + 2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize + 4, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize + 4, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize / 2 + 2, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize / 2 + 2, y), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_SemiCircleUp(x,y)
{

    var f = new Figure("SemiCircleUp");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.2.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.2.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.2.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.2.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.2.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.2.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.2.valign', Text.VALIGNMENTS);
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    var c = new Arc(x, y, FigureDefaults.radiusSize, 180, 360, false, 0);
    var l = new Line(new Point(x - FigureDefaults.radiusSize, y), new Point(x + FigureDefaults.radiusSize, y) );
    f.addPrimitive(c);
    f.addPrimitive(l);
    var t2 = new Text(FigureDefaults.textStr, x, y - FigureDefaults.radiusSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - FigureDefaults.radiusSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_SemiCircleDown(x,y)
{

    var f = new Figure("SemiCircleDown");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.2.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.2.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.2.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.2.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.2.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.2.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
 //f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.2.valign', Text.VALIGNMENTS);
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));

    var c = new Arc(x, y, FigureDefaults.radiusSize, 0, 180, false, 0);
    var l = new Line(new Point(x - FigureDefaults.radiusSize, y), new Point(x + FigureDefaults.radiusSize, y) );
    f.addPrimitive(c);
    f.addPrimitive(l);
    var t2 = new Text(FigureDefaults.textStr, x, y + FigureDefaults.radiusSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.radiusSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_Circle(x,y)
{

    var f = new Figure("Circle");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;


    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS);
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    var c = new Arc(x, y, FigureDefaults.radiusSize, 0, 360, false, 0);

    f.addPrimitive(c);
    var t2 = new Text(FigureDefaults.textStr, x, y, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.radiusSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - FigureDefaults.radiusSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_Triangle(x,y)
{

    var t = new Polygon();
    t.addPoint(new Point(x + FigureDefaults.segmentSize/2, y));
    t.addPoint(new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize));
    t.addPoint(new Point(x, y + FigureDefaults.segmentSize));

    var e = new Figure("Triangle");
    e.style.fillStyle = FigureDefaults.fillStyle;
    e.style.strokeStyle = FigureDefaults.strokeStyle;
    e.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    e.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    e.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    e.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    e.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    e.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    e.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    e.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    e.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    e.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    e.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    //f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS);
    e.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    e.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    var t2 = new Text(FigureDefaults.textStr, x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentSize/2 + 7, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    e.addPrimitive(t);
    e.addPrimitive(t2);
    CONNECTOR_MANAGER.connectionPointCreate(e.id,new Point(x + FigureDefaults.segmentSize/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id,new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id,new Point(x, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id,new Point(x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id,new Point(x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentSize/2+5), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id,new Point(x + FigureDefaults.segmentSize/2 + FigureDefaults.segmentSize/4, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id,new Point(x + FigureDefaults.segmentSize/4, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);

    e.finalise();
    return e;
}

function figure_Start(x,y)
{
    var circleRadius = 7;
    
    var f = new Figure("Start");
    f.style.fillStyle = "#000000";
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    //CIRCLE
    var c = new Arc(x, y, circleRadius, 0, 360, false, 0);

    f.addPrimitive(c);

    //CONNECTION POINTS
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    
    return f;
}

function figure_End(x,y)
{
    var innerCircleRadius = 7;
    var outerCircleRadius = 12;
    
    var f = new Figure("Start");
    f.style.fillStyle = "#000000";
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    //outer circle
    var oc = new Arc(x, y, outerCircleRadius, 0, 360, false, 0);
    oc.style.fillStyle = "#FFFFFF";
    oc.style.strokeStyle = '#000000';
    f.addPrimitive(oc);
    
    //inner circle
    var ic = new Arc(x, y, innerCircleRadius, 0, 360, false, 0);
    ic.style.fillStyle = "#000000";
    oc.style.strokeStyle = '#000000';
    f.addPrimitive(ic);

    //CONNECTION POINTS
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - outerCircleRadius, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + outerCircleRadius, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x , y + outerCircleRadius), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x , y - outerCircleRadius), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    
    return f;
}


function figure_State(x,y)
{
    var f = new Figure("State");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;
    f.style.lineWidth = 2;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    var p = new Path();
    var hShrinker = 10;
    var vShrinker = 6;
    var l1 = new Line(new Point(x + hShrinker, y + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker, y + vShrinker));

    var c1 = new QuadCurve(new Point(x + FigureDefaults.segmentSize - hShrinker, y + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner/FigureDefaults.cornerRoundness + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + vShrinker))

    var l2 = new Line(new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker));

    var c2 = new QuadCurve(new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10)),
        new Point(x + FigureDefaults.segmentSize - hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner))

    var l3 = new Line(new Point(x + FigureDefaults.segmentSize - hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner),
        new Point(x + hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner));

    var c3 = new QuadCurve(
        new Point(x + hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner),
        new Point(x + hShrinker - FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10)),
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker))

    var l4 = new Line(new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker),
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + vShrinker));

    var c4 = new QuadCurve(
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + vShrinker),
        new Point(x + hShrinker - FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + vShrinker),
        new Point(x + hShrinker, y + vShrinker))

    p.addPrimitive(l1);
    p.addPrimitive(c1);
    p.addPrimitive(l2);
    p.addPrimitive(c2);
    p.addPrimitive(l3);
    p.addPrimitive(c3);
    p.addPrimitive(l4);
    p.addPrimitive(c4);
    f.addPrimitive(p);

    var t2 = new Text(FigureDefaults.textStr, x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentShortSize/2 + FigureDefaults.corner, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    var wid = FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner;
    var height = FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner;
    //top
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 - 10, y + vShrinker), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2, y + vShrinker), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 + 10, y + vShrinker), ConnectionPoint.TYPE_FIGURE);

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid, y + height / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid, y + height / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid, y + height / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    //bottom
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 - 10, y + height), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2, y + height), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 + 10, y + height), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + height / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + height / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + height / 2 + 10), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}


function figure_Note(x,y)
{
    var figureWidth = 60;
    var foldWidth = 10;
    
    
    //figure
    var f = new Figure("Note");
        
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;
    f.style.lineCap = f.style.STYLE_LINE_CAP_ROUND;
    f.style.lineJoin = f.style.STYLE_LINE_CAP_ROUND;
        
    //base note
    var r = new Polygon();    
    r.addPoint(new Point(x - figureWidth/2, y - figureWidth/2));
    r.addPoint(new Point(x + figureWidth/2 - foldWidth, y - figureWidth/2));
    r.addPoint(new Point(x + figureWidth/2, y - figureWidth/2 + foldWidth));
    r.addPoint(new Point(x + figureWidth/2, y + figureWidth/2));
    r.addPoint(new Point(x - figureWidth/2, y + figureWidth/2));
    f.addPrimitive(r);
    
    //fold
    var fold = new Polygon();    
    fold.style.lineCap = f.style.STYLE_LINE_CAP_ROUND;
    fold.style.lineJoin = f.style.STYLE_LINE_CAP_ROUND;
    fold.addPoint(new Point(x + figureWidth/2 - foldWidth, y - figureWidth/2));
    fold.addPoint(new Point(x + figureWidth/2 - foldWidth, y - figureWidth/2 + foldWidth));
    fold.addPoint(new Point(x + figureWidth/2, y - figureWidth/2 + foldWidth));    
    f.addPrimitive(fold);

    //Text
    var t2 = new Text(FigureDefaults.textStr, x , y , FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);
    
    
    f.properties.push(new BuilderProperty('Text', 'primitives.2.str', BuilderProperty.TYPE_TEXT));

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + figureWidth/2 , y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - figureWidth/2 , y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - figureWidth/2 ), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + figureWidth/2 ), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}