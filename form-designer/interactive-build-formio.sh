#!/usr/bin/env bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("Run Form.io API Platform" "Run Form.io client" "Build Form.io client" "Prune System" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Run Form.io API Platform")
            echo "you chose 'Run Form.io API Platform'"
            docker-compose up
            ;;
        "Run Form.io client")
            echo "you chose 'Run Form.io client'"
            gulp serve
            ;;
        "Build Form.io client")
            echo "you chose 'Build Form.io client'"
            gulp build
            ;;
        "Prune System")
            echo "you chose 'Prune System'"
            docker system prune
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done
