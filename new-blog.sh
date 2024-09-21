#!/bin/bash

# Check if an argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <name>"
    exit 1
fi

# Get the name from the argument
name=$1

mkdir -p "./blogs/$name"
touch "./blogs/$name/index.md"

mkdir -p "./images/blogs/${name}"

echo "Created blog $name"
echo "You can now start writing your blog in ./blogs/$name/index.md"
echo "You can add images to ./images/blogs/$name"