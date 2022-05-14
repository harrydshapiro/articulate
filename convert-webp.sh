#!/bin/bash

for file in public/*.jpeg; do echo "$file" & magick ${file} "${file/jpeg/jpeg}" & rm "$file"; done