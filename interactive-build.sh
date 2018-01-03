#!/usr/bin/env bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("Normal Build" "Normal build and publish" "Run App" "Run Test" "Run Test And Watch" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Normal Build")
            echo "you chose 'Normal Build'"
            npm run build && cd dist/lib && yarn pack
            ;;
        "Normal build and publish")
            echo "you chose 'Normal build and publish'"
            printf 'New Version [] : '
            read newVersion
            sed -i -E "s/\"version\":.*[^,]/\"version\":\"${newVersion}\"/g" package.json
            npm run build && cd dist/lib && yarn publish
            ;;
        "Run App")
            echo "you chose 'Run App'"
            npm run start
            ;;
        "Run Test")
            echo "you chose 'Run Test'"
            printf 'Matching File Name : '
            read fileName
            npm run test ${fileName}
            ;;
        "Run Test And Watch")
            echo "you chose 'Run Test And Watch'"
            printf 'Matching File Name : '
            read fileName
            npm run test:watch ${fileName}
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done
