var x = 0, y = 0;
var currentDirection = "North";
var distance;
var visited = [];

function followInstruction(instruction) 
{
	var direction = instruction[0];
	distance = Number(instruction.substring(1));
	
	if(direction === "L")
	{
		if(currentDirection === "North")
		{
			currentDirection = "West";
		}
		else if (currentDirection === "West")
		{
			currentDirection = "South";
		}
		else if(currentDirection === "South")
		{
			currentDirection = "East";
		}
		else if(currentDirection === "East")
		{
			currentDirection = "North";
		}
	}
	else if(direction === "R")
	{
		if(currentDirection === "North")
		{
			currentDirection = "East";
		}
		else if (currentDirection === "East")
		{
			currentDirection = "South";
		}
		else if(currentDirection === "South")
		{
			currentDirection = "West";
		}
		else if(currentDirection === "West")
		{
			currentDirection = "North";
		}
	}
	
	switch(currentDirection)
	{
		case "North":
			y += distance;
			break;
		case "South":
			y -= distance;
			break;
		case "East":
			x += distance;
			break;
		case "West":
			x -= distance;
			break;
	}
}

function visitedLocationAgain()
{
	var curX, curY;
	var result = false;
	for(var i = 0; i < distance; i++)
	{
		if(currentDirection === "North")
		{
			curX = visited[visited.length-1].x;
			curY = visited[visited.length-1].y + 1;
		}
		else if(currentDirection === "South")
		{
			curX = visited[visited.length-1].x;
			curY = visited[visited.length-1].y - 1
		}
		else if(currentDirection === "east")
		{
			curX = visited[visited.length-1].x + 1;
			curY = visited[visited.length-1].y;
		}
		else if(currentDirection === "South")
		{
			curX = visited[visited.length-1].x - 1;
			curY = visited[visited.length-1].y;
		}
		if(hasBeenVisited(curX, curY))
		{
			result = true;
			x = curX;
			y = curY;
			break;
		}
		visited.push({x: curX, y: curY});
	}
	return result;
}

function findDistance(point1, point2)
{
	return Math.abs(point1.y - point2.y) + Math.abs(point1.x - point2.x);
}

function hasBeenVisited(posX, posY)
{
	var result = false;
	for(var i = 0; i < visited.length; i++)
	{
		result |= (visited[i].x === posX && visited[i].y === posY);
	}
	return result;
}

function main(input)
{
	var instructions = input.split(", ");
	
	for(var i = 0; i < instructions.length; i++)
	{
		followInstruction(instructions[i]);
		if(visitedLocationAgain())
		{
			break;
		}
	}
	
	return findDistance({x: 0, y: 0}, {x: x, y: y});
}