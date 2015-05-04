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

figureSets["nivel4"] = { 
    name : 'Nivel 4',
    description : 'Elementos del cuarto nivel',
    figures:[
        {figureFunction: "Rol", image: "Rol.png"},
        {figureFunction: "Octogon", image: "octogon.png"},
        {figureFunction: "Person", image: "1_person.png"}
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

function figure_Octogon(x,y)
{
    var r = new Polygon();

    var l = FigureDefaults.segmentShortSize/6*2;
    var a = l/Math.sqrt(2);
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x + l, y));
    r.addPoint(new Point(x + l + a, y + a));
    r.addPoint(new Point(x + l + a, y + a + l));
    r.addPoint(new Point(x + l, y + a + l + a));
    r.addPoint(new Point(x, y + a + l + a));
    r.addPoint(new Point(x - a, y + a + l));
    r.addPoint(new Point(x - a, y + a));

    var f = new Figure("Octogon");
    f.style.fillStyle = "#FF0000";
    f.style.strokeStyle = "silver";

    this.x = 410; 
    this.y = 125;

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

    var t2 = new Text(FigureDefaults.textStr, x + l/2, y + (l+a+a)/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l + a, y + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l + a, y + a + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l, y + a + l + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + a + l + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - a, y + a + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - a, y + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l / 2, y + (l+a+a)/2), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_Person(x, y)
{
    var f = new Figure("Person");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    //Image
    var url = figureSetsURL + "/svg.php?set=network&figure=1_person";
    
    var ifig = new ImageFrame(url, x, y, true, 48, 48);
    ifig.debug = true;
    f.addPrimitive(ifig);    

    this.x = 620; 
    this.y = 150;
    
    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));
    
//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));
    
    var t2 = new Text(FigureDefaults.textStr, x, y + 24, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;
    f.addPrimitive(t2);
    
    //Connection Points
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + 24, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - 24, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - 24), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + 35), ConnectionPoint.TYPE_FIGURE);
    
    f.finalise();
    return f;
}