#!/bin/bash

for file in public/*.webp; do echo "$file" & magick ${file} "${file/webp/jpeg}" & rm "$file"; done