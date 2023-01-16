# node-mapper
demo code to assign one message per operator only. there should be no collisions

# technologies used
* nodejs v14.19.3
* mariadb 10.5.4

# simulation
`MappingHelper.map(operatorEl);` calling this code directly will assign multiple operators to single messages<br>
`MappingHelper.enqueueMapJob(operatorEl);` this code will eliminate the multiple operators to single message problem
