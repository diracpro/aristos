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

/**Figure set declaration*/
figureSets["nivel1"] = {
    name: 'Nivel 1',
    description : 'Elementos del primer nivel',
    figures: [
        {figureFunction: "Proceso", image: "Proceso.png", title: "Proceso"},
        {figureFunction: "Entidad_externa", image: "Entidad_externa.png", title: "Entidad externa"},
        {figureFunction: "Text", image: "text.png"}
    ]
};

/**Object with default values for figures*/
var FigureDefaults = {
    /**Size of figure's segment*/
    segmentSize : 140,

    /**Size of figure's short segment*/
    segmentShortSize : 80,

    /**Size of radius*/
    radiusSize : 35,

    /**Size of offset for parallels
    * For example: for parallelogram it's projection of inclined line on X axis*/
    parallelsOffsetSize : 40,

    /**Corner radius
    * For example: for rounded rectangle*/
    corner : 10,

    /**Corner roundness
    * Value from 0 to 10, where 10 - it's circle radius.*/
    cornerRoundness : 8,

    /**Color of lines*/
    strokeStyle : "#000000",

    /**Color of fill*/
    fillStyle : "#ffffff",

    /**Text size*/
    textSize : 14,

    /**Text label*/
    textStr : "Text",

    /**Text font*/
    textFont : "Arial",

    /**Color of text*/
    textColor : "#000000"
};


function figure_Proceso(x, y)
{
    var f = new Figure("Proceso");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));

    var rectangleHeight = FigureDefaults.segmentShortSize + 5;

    var bordeAncho = 3;
    //Dibuja el borde
    var rr = new Polyline();
    rr.addPoint(new Point(x +bordeAncho, y +bordeAncho));
    rr.addPoint(new Point(x + FigureDefaults.segmentSize +bordeAncho, y +bordeAncho));
    rr.addPoint(new Point(x + FigureDefaults.segmentSize +bordeAncho, y + rectangleHeight +bordeAncho));
    rr.addPoint(new Point(x +bordeAncho, y + rectangleHeight +bordeAncho));
    rr.style.fillStyle = FigureDefaults.strokeStyle;
    f.addPrimitive(rr);

    var r = new Polygon();
//    var r = new Polyline();
//    r.style.lineCap = r.style.STYLE_LINE_CAP_BUTT;
//    r.style.lineJoin = r.style.STYLE_LINE_JOIN_MITER;
    r.style.lineWidth=bordeAncho+1;
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y + rectangleHeight));
    r.addPoint(new Point(x, y + rectangleHeight));

    f.addPrimitive(r);

    var t2 = new Text("Proceso", x + FigureDefaults.segmentSize/2, y + rectangleHeight/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    //test line style
//    f.addPrimitive(new Line(new Point(10, 10), new Point(300, 300)));
    //end test

//    //point
//    var p = new Point(x + 50, y  +50);
//    f.addPrimitive(p);
/*
    var l = FigureDefaults.segmentShortSize + 5;
    //top
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y), ConnectionPoint.TYPE_FIGURE);

    //bottom
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10, y + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y + l), ConnectionPoint.TYPE_FIGURE);

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);
*/
    f.finalise();
    return f;
}

function figure_Entidad_externa(x, y)
{
    var f = new Figure("Entidad_externa");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;


    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));

    var rectangleHeight = FigureDefaults.segmentShortSize + 5;

    var r = new Polygon();
//    var r = new Polyline();
//    r.style.lineCap = r.style.STYLE_LINE_CAP_BUTT;
//    r.style.lineJoin = r.style.STYLE_LINE_JOIN_MITER;
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y + rectangleHeight));
    r.addPoint(new Point(x, y + rectangleHeight));

    f.addPrimitive(r);

    var t2 = new Text("Entidad\nexterna", x + FigureDefaults.segmentSize/2, y + rectangleHeight/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    //test line style
//    f.addPrimitive(new Line(new Point(10, 10), new Point(300, 300)));
    //end test

//    //point
//    var p = new Point(x + 50, y  +50);
//    f.addPrimitive(p);
/*
    var l = FigureDefaults.segmentShortSize + 5;
    //top
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y), ConnectionPoint.TYPE_FIGURE);

    //bottom
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10, y + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y + l), ConnectionPoint.TYPE_FIGURE);

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);
*/
    f.finalise();
    return f;
}

function figure_Text(x,y)
{

    var f = new Figure('Text');
    f.style.fillStyle = FigureDefaults.fillStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.0.str', BuilderProperty.TYPE_TEXT));

    //when we change textSize we need to transform the connectionPoints, 
    //this is the only time connecitonPoints get transformed for text
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.0.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.0.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.0.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.0.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.0.style.fillStyle', BuilderProperty.TYPE_COLOR));
    //f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.0.valign', Text.VALIGNMENTS);

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));


    var t2 = new Text(FigureDefaults.textStr, x, y + FigureDefaults.radiusSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);
    
    //lets set up our connection points to be right on the bounds
//    var bounds = f.getBounds();
//    var width = bounds[2] - bounds[0];
//    var height = bounds[3] - bounds[1];
//    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[0] + width/2, bounds[1] - 2), ConnectionPoint.TYPE_FIGURE);
//    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[0] + width/2, bounds[3] + 2), ConnectionPoint.TYPE_FIGURE);
//    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[0] - 2, bounds[1] + height/2), ConnectionPoint.TYPE_FIGURE);
//    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[2] + 2, bounds[1] + height/2), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}
