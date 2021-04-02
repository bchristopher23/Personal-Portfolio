(function(){

    init();
    setInterval(init, 6000);

    function init() {

        var canvas = document.querySelector("#heroCanvas"),
            ctx = canvas.getContext("2d");

        const boxes = [
            {
                top: {
                    startX: 772.500000,
                    startY: 530.200000
                },

                right: {
                    startX: 921.500000,
                    startY: 454.800000
                },

                bottom: {
                    startX: 1345.500000,
                    startY: 724.900000
                },

                left: {
                    startX: 1196.500000,
                    startY: 800.300000
                }
            },
            {
                top: {
                    startX: 608.200000,
                    startY: 280.100000
                },

                right: {
                    startX: 757.200000,
                    startY: 204.700000
                },

                bottom: {
                    startX: 1181.200000,
                    startY: 474.900000
                },

                left: {
                    startX: 1032.200000,
                    startY: 550.300000
                }
            },
            {
                top: {
                    startX: 1127.500000,
                    startY: 693.900000
                },

                right: {
                    startX: 1276.400000,
                    startY: 618.500000
                },

                bottom: {
                    startX: 1700.600000,
                    startY: 888.700000
                },

                left: {
                    startX: 1551.600000,
                    startY: 964.100000
                }
            },
            {
                top: {
                    startX: 321.600000,
                    startY: 357.300000
                },

                right: {
                    startX: 470.500000,
                    startY: 281.900000
                },

                bottom: {
                    startX: 894.700000,
                    startY: 552.100000
                },

                left: {
                    startX: 745.700000,
                    startY: 627.500000
                }
            },
            {
                top: {
                    startX: 309.300000,
                    startY: 573.600000
                },

                right: {
                    startX: 458.300000,
                    startY: 498.200000
                },

                bottom: {
                    startX: 882.300000,
                    startY: 768.400000
                },

                left: {
                    startX: 733.300000,
                    startY: 843.800000
                }
            },
            {
                top: {
                    startX: 1045.500000,
                    startY: 385.300000
                },

                right: {
                    startX: 1194.500000,
                    startY: 309.900000
                },

                bottom: {
                    startX: 1618.600000,
                    startY: 580.100000
                },

                left: {
                    startX: 1469.600000,
                    startY: 655.500000
                }
            },
            {
                top: {
                    startX: 759.000000,
                    startY: 156.600000
                },

                right: {
                    startX: 908.000000,
                    startY: 81.200000
                },

                bottom: {
                    startX: 1332.100000,
                    startY: 351.400000,
                },

                left: {
                    startX: 1183.200000,
                    startY: 426.800000
                }
            },
            {
                top: {
                    startX: 0.000000,
                    startY: 578.600000
                },

                right: {
                    startX: 149.000000,
                    startY: 503.200000
                },

                bottom: {
                    startX: 573.100000,
                    startY: 773.400000,
                },

                left: {
                    startX: 424.100000,
                    startY: 848.800000
                }
            },
            {
                top: {
                    startX: 928.200000,
                    startY: 774.000000
                },

                right: {
                    startX: 1077.200000,
                    startY: 698.600000
                },

                bottom: {
                    startX: 1501.200000,
                    startY: 968.800000,
                },

                left: {
                    startX: 1352.300000,
                    startY: 1044.200000
                }
            },
            {
                top: {
                    startX: 71.800000,
                    startY: 321.800000
                },

                right: {
                    startX: 220.800000,
                    startY: 246.400000
                },

                bottom: {
                    startX: 644.800000,
                    startY: 516.500000,
                },

                left: {
                    startX: 495.900000,
                    startY: 592.000000
                }
            },
            {
                top: {
                    startX: 221.000000,
                    startY: 156.600000
                },

                right: {
                    startX: 369.900000,
                    startY: 81.200000
                },

                bottom: {
                    startX: 794.000000,
                    startY: 351.400000,
                },

                left: {
                    startX: 645.000000,
                    startY: 426.800000
                }
            },
            {
                top: {
                    startX: 1220.500000,
                    startY: 837.400000
                },

                right: {
                    startX: 1369.400000,
                    startY: 762.000000
                },

                bottom: {
                    startX: 1793.600000,
                    startY: 1032.200000,
                },

                left: {
                    startX: 1644.600000,
                    startY: 1107.600000
                }
            },
            {
                top: {
                    startX: 1319.500000,
                    startY: 586.500000
                },

                right: {
                    startX: 1468.500000,
                    startY: 511.100000
                },

                bottom: {
                    startX: 1892.600000,
                    startY: 781.300000,
                },

                left: {
                    startX: 1743.600000,
                    startY: 856.700000
                }
            },
            {
                top: {
                    startX: 934.000000,
                    startY: 370.400000
                },

                right: {
                    startX: 1083.000000,
                    startY: 295.000000
                },

                bottom: {
                    startX: 1507.100000,
                    startY: 565.200000,
                },

                left: {
                    startX: 1358.100000,
                    startY: 640.600000
                }
            },
            {
                top: {
                    startX: 1214.700000,
                    startY: 475.900000
                },

                right: {
                    startX: 1363.700000,
                    startY: 400.500000
                },

                bottom: {
                    startX: 1787.800000,
                    startY: 670.700000,
                },

                left: {
                    startX: 1638.800000,
                    startY: 746.100000
                }
            },
            {
                top: {
                    startX: 1573.700000,
                    startY: 502.200000
                },

                right: {
                    startX: 1722.700000,
                    startY: 426.800000
                },

                bottom: {
                    startX: 2146.800000,
                    startY: 697.000000,
                },

                left: {
                    startX: 1997.800000,
                    startY: 772.400000
                }
            },
            {
                top: {
                    startX: 492.800000,
                    startY: 90.100000
                },

                right: {
                    startX: 641.800000,
                    startY: 14.700000
                },

                bottom: {
                    startX: 1065.900000,
                    startY: 284.900000,
                },

                left: {
                    startX: 916.900000,
                    startY: 360.300000
                }
            },
            {
                top: {
                    startX: 1457.800000,
                    startY: 225.600000
                },

                right: {
                    startX: 1606.800000,
                    startY: 150.200000
                },

                bottom: {
                    startX: 2030.90000,
                    startY: 420.400000,
                },

                left: {
                    startX: 1881.900000,
                    startY: 495.800000
                }
            },
            {
                top: {
                    startX: 952.900000,
                    startY: 75.600000
                },

                right: {
                    startX: 1101.900000,
                    startY: 0.200000
                },

                bottom: {
                    startX: 1526.000000,
                    startY: 270.400000,
                },

                left: {
                    startX: 1377.100000,
                    startY: 345.800000
                }
            },
            {
                top: {
                    startX: 1346.200000,
                    startY: 210.700000
                },

                right: {
                    startX: 1495.100000,
                    startY: 135.300000
                },

                bottom: {
                    startX: 1919.300000,
                    startY: 405.500000,
                },

                left: {
                    startX: 1770.300000,
                    startY: 480.900000
                }
            },
            {
                top: {
                    startX: 421.300000,
                    startY: 730.900000
                },

                right: {
                    startX: 570.300000,
                    startY: 655.500000
                },

                bottom: {
                    startX: 994.400000,
                    startY: 925.700000,
                },

                left: {
                    startX: 845.400000,
                    startY: 1001.100000
                }
            }
        ]

        // Generate 2 random numbers between the length of the boxes array and make sure they are not the same or equal to 2.
        // We skip boxes 0 and 2 because they don't animate properly, no idea why
        function generateRandom(min, max) {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === 2 || num === 0 ) ? generateRandom(min, max) : num;
        }

        var rand = generateRandom(0, boxes.length - 1);
        var rand2 = generateRandom(0, boxes.length - 1);

        // run this loop until rand is different than rand2
        do {
            rand = generateRandom(0, boxes.length - 1)
        } while(rand === rand2);

        // run this loop until rand2 is different than rand
        do {
            rand2 = generateRandom(0, boxes.length - 1)
        } while(rand2 === rand);
        
        var staggerIndex = 0;

        ctx.fillStyle = "#83c24d";
        ctx.strokeStyle = 'rgba(255, 255, 255, .2)';

        function drawBoxes() {
            for (var i = 0; i < boxes.length; i++) {

                var box = boxes[i],
                    topStartX = box.top.startX,
                    topStartY = box.top.startY,
                    rightStartX = box.right.startX,
                    rightStartY = box.right.startY,
                    bottomStartX = box.bottom.startX,
                    bottomStartY = box.bottom.startY,
                    leftStartX = box.left.startX,
                    leftStartY = box.left.startY;

                // Draw all the boxes
                ctx.beginPath();
                ctx.moveTo(topStartX, topStartY);
                ctx.lineTo(rightStartX, rightStartY);
                ctx.lineTo(bottomStartX, bottomStartY);
                ctx.lineTo(leftStartX, leftStartY);
                ctx.lineTo(topStartX, topStartY);
                ctx.closePath();
                ctx.stroke();

            }
        }

        var topLength = lineDistance(772, 530.2, 921.5, 454.8);
        var sideLength = lineDistance(921.5, 454.8, 1345.5, 724.9);

        // Draw Circles
        for (var i = 0; i < boxes.length; i++) {

            if (i == rand) {
                staggerIndex = 0;
            }

            if (i === rand2) {
                staggerIndex = 1;
            }

            var box = boxes[i],
                    topStartX = box.top.startX,
                    topStartY = box.top.startY,
                    rightStartX = box.right.startX,
                    rightStartY = box.right.startY,
                    bottomStartX = box.bottom.startX,
                    bottomStartY = box.bottom.startY,
                    leftStartX = box.left.startX,
                    leftStartY = box.left.startY;

            var circleTl = new TimelineMax({
                repeat: 0,
                repeatDelay: 0,
                ease: Linear.easeNone
            });
            
            this['circle' + i] = {
                radius: 1.5,
                x: topStartX,
                y: topStartY
            };

            var circle = this['circle' + i];

            var startTime1 = staggerIndex,
                startTime2 = staggerIndex + 1,
                startTime3 = staggerIndex + 2,
                startTime4 = staggerIndex + 3;
                startTime5 = staggerIndex + 3.9;
            
            circleTl.set(circle, {radius: 0});
            circleTl.to(circle, .1, {radius: 1.5}, startTime1);
            circleTl.to(circle, 1, { x: rightStartX, y: rightStartY, ease: Linear.easeNone }, startTime1);     
            circleTl.to(circle, 1, { x: bottomStartX, y: bottomStartY, ease: Linear.easeNone }, startTime2);
            circleTl.to(circle, 1, { x: leftStartX, y: leftStartY, ease: Linear.easeNone}, startTime3);
            circleTl.to(circle, 1, { x: topStartX, y: topStartY, ease: Linear.easeNone}, startTime4);
            circleTl.to(circle, .2, {radius: 0}, startTime5);

            // Top Line Timeline
            var topTl = new TimelineMax({
                repeat: 0,
                repeatDelay: 0,
                ease: Linear.easeNone
            });
            
            this['topDash' + i] = {
                offset: topLength
            };

            var topDash = this['topDash' + i];
            
            this['topDash2' + i] = {
                offset: topLength
            };

            var topDash2 = this['topDash2' + i];

            var topStartTime1 = staggerIndex,
                topStartTime2 = staggerIndex + 1;

            topTl.set(topDash, {offset: topLength});
            topTl.to(topDash, 1, {ease: Linear.easeNone, offset: 0, repeat: 0, repeatDelay: 0}, topStartTime1);
            topTl.set(topDash2, {ease: Linear.easeNone, offset: 0});
            topTl.to(topDash2, 1, {ease: Linear.easeNone, offset: topLength, repeat: 0, repeatDelay: 0}, topStartTime2);

            // Right Line Timeline
            var rightTl = new TimelineMax({
                repeat: 0,
                repeatDelay: 0,
                ease: Linear.easeNone
            });
            
            this['rightDash' + i] = {
                offset: sideLength
            };

            var rightDash = this['rightDash' + i];
            
            this['rightDash2' + i] = {
                offset: sideLength
            };

            var rightDash2 = this['rightDash2' + i];

            var rightStartTime1 = staggerIndex + 1,
                rightStartTime2 = staggerIndex + 2;

            rightTl.set(rightDash, {offset: sideLength});
            rightTl.to(rightDash, 1, {ease: Linear.easeNone, offset: 0, repeat: 0, repeatDelay: 0}, rightStartTime1);
            
            rightTl.set(rightDash2, {ease: Linear.easeNone, offset: 0});
            rightTl.to(rightDash2, 1, {ease: Linear.easeNone, offset: sideLength, repeat: 0, repeatDelay: 0}, rightStartTime2);

            // Bottom Line Timeline
            var bottomTl = new TimelineMax({
                repeat: 0,
                repeatDelay: 0,
                ease: Linear.easeNone
            });
            
            this['bottomDash' + i] = {
                offset: topLength
            };

            var bottomDash = this['bottomDash' + i];
            
            this['bottomDash2' + i] = {
                offset: topLength
            };

            var bottomDash2 = this['bottomDash2' + i];

            var bottomStartTime1 = staggerIndex + 2,
                bottomStartTime2 = staggerIndex + 3;

            bottomTl.set(bottomDash, {offset: topLength});
            bottomTl.to(bottomDash, 1, {ease: Linear.easeNone, offset: 0, repeat: 0, repeatDelay: 0}, bottomStartTime1);
            bottomTl.set(bottomDash2, {ease: Linear.easeNone, offset: 0});
            bottomTl.to(bottomDash2, 1, {ease: Linear.easeNone, offset: topLength, repeat: 0, repeatDelay: 0}, bottomStartTime2);

            // Left Line Timeline
            var leftTl = new TimelineMax({
                repeat: 0,
                repeatDelay: 0,
                ease: Linear.easeNone
            });
            
            this['leftDash' + i] = {
                offset: sideLength
            };

            var leftDash = this['leftDash' + i];
            
            this['leftDash2' + i] = {
                offset: sideLength
            };

            var leftDash2 = this['leftDash2' + i];

            var leftStartTime1 = staggerIndex + 3,
                leftStartTime2 = staggerIndex + 4;

            leftTl.set(leftDash, {offset: sideLength});
            leftTl.to(leftDash, 1, {ease: Linear.easeNone, offset: 0, repeat: 0, repeatDelay: 0}, leftStartTime1);
            leftTl.set(leftDash2, {ease: Linear.easeNone, offset: 0});
            leftTl.to(leftDash2, 1, {ease: Linear.easeNone, offset: sideLength, repeat: 0, repeatDelay: 0}, leftStartTime2);

            staggerIndex++;

        }

        function drawAnimatedLines() {

            for (var i = 0; i < boxes.length; i++) {

                var box = boxes[i],
                    topStartX = box.top.startX,
                    topStartY = box.top.startY,
                    rightStartX = box.right.startX,
                    rightStartY = box.right.startY,
                    bottomStartX = box.bottom.startX,
                    bottomStartY = box.bottom.startY,
                    leftStartX = box.left.startX,
                    leftStartY = box.left.startY;
                    
                // Draw all the boxes
                ctx.beginPath();
                ctx.moveTo(topStartX, topStartY);
                ctx.lineTo(rightStartX, rightStartY);
                ctx.lineTo(bottomStartX, bottomStartY);
                ctx.lineTo(leftStartX, leftStartY);
                ctx.lineTo(topStartX, topStartY);
                ctx.strokeStyle = 'rgba(255, 255, 255, .1)';
                ctx.setLineDash([]);
                ctx.stroke();
                
                ctx.closePath();

                var strokeColor;

                // Only animate 2 random boxes
                if (i == rand || i == rand2) {

                    if (i == rand) {
                        staggerIndex = 0;
                        strokeColor = 'rgba(132, 194, 77, .5)';
                    } else {
                        staggerIndex = 1;
                        strokeColor = 'rgba(255, 255, 255, .5)';
                    }

                    // Animate the top box
                    var topDashi = this['topDash' + i];
                    var topDash2i = this['topDash2' + i];

                    if (topDashi.offset == 0) {

                        // First Part of Line drawing is done, reverse direction
                        ctx.beginPath();
                        ctx.moveTo(rightStartX, rightStartY);  
                        ctx.lineTo(topStartX, topStartY);
                        ctx.setLineDash([topLength - topDash2i.offset, topDash2i.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                    } else {

                        // Draw line
                        ctx.beginPath();
                        ctx.moveTo(topStartX, topStartY);  
                        ctx.lineTo(rightStartX, rightStartY);
                        ctx.setLineDash([topLength - topDashi.offset, topDashi.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                    }

                    // Animate the right box
                    var rightDashi = this['rightDash' + i];
                    var rightDash2i = this['rightDash2' + i];

                    if (rightDashi.offset == 0) {

                        // First Part of Line drawing is done, reverse direction
                        ctx.beginPath();
                        ctx.moveTo(bottomStartX, bottomStartY);  
                        ctx.lineTo(rightStartX, rightStartY);
                        ctx.setLineDash([sideLength - rightDash2i.offset, rightDash2i.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                        } else {

                        // Draw line
                        ctx.beginPath();
                        ctx.moveTo(rightStartX, rightStartY);  
                        ctx.lineTo(bottomStartX, bottomStartY);
                        ctx.setLineDash([sideLength - rightDashi.offset, rightDashi.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                    }

                    // Animate the bottom box
                    var bottomDashi = this['bottomDash' + i];
                    var bottomDash2i = this['bottomDash2' + i];

                    if (bottomDashi.offset == 0) {

                        // First Part of Line drawing is done, reverse direction
                        ctx.beginPath();
                        ctx.moveTo(leftStartX, leftStartY);  
                        ctx.lineTo(bottomStartX, bottomStartY);
                        ctx.setLineDash([topLength - bottomDash2i.offset, bottomDash2i.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                    } else {

                        // Draw line
                        ctx.beginPath();
                        ctx.moveTo(bottomStartX, bottomStartY);  
                        ctx.lineTo(leftStartX, leftStartY);
                        ctx.setLineDash([topLength - bottomDashi.offset, bottomDashi.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                    }

                    // Animate the left box
                    var leftDashi = this['leftDash' + i];
                    var leftDash2i = this['leftDash2' + i];

                    if (leftDashi.offset == 0) {

                        // First Part of Line drawing is done, reverse direction
                        ctx.beginPath();
                        ctx.moveTo(topStartX, topStartY);  
                        ctx.lineTo(leftStartX,leftStartY);
                        ctx.setLineDash([sideLength - leftDash2i.offset, leftDash2i.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                    } else {

                        // Draw line
                        ctx.beginPath();
                        ctx.moveTo(leftStartX, leftStartY);  
                        ctx.lineTo(topStartX, topStartY);
                        ctx.setLineDash([sideLength - leftDashi.offset, leftDashi.offset]);
                        ctx.strokeStyle = strokeColor;
                        ctx.stroke();
                        ctx.lineWidth = 2;
                        ctx.closePath();

                    }

                    // Draw Circles
                    var circlei = this['circle' + i];

                    ctx.beginPath();
                    ctx.arc(circlei.x, circlei.y, circlei.radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = strokeColor;
                    ctx.fill();
                    ctx.closePath();

                }

            }

        }

        TweenLite.ticker.addEventListener("tick", update);

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAnimatedLines();
        }

        // Calculate Distance Between 2 Points
        function lineDistance(x1, y1, x2, y2) {
            return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
        }

    }

})();