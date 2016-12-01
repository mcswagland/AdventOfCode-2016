var x = 0, y = 0;
var currentDirection = "North";

function followInstruction(instruction) 
{
	var direction = instruction[0];
	var distance = Number(instruction.substring(1));
	
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

function findDistance(point1, point2)
{
	return Math.abs(point1.y - point2.y) + Math.abs(point1.x - point2.x);
}

function main(input)
{
	var instructions = input.split(", ");
	
	for(var i = 0; i < instructions.length; i++)
	{
		followInstruction(instructions[i]);
	}
	
	return findDistance({x: 0, y: 0}, {x: x, y: y});
}