import graphReader from "./graphReader";

const mapColumn = (fileName : string)  => {
    try {
        const typeDefinition = graphReader(fileName);
        // console.log("typeDefinition : ", typeDefinition)

        const regex = /([a-zA-Z_][a-zA-Z0-9_ ]*):/g;
        const propertyNames = [];
        let match;

        while ((match = regex.exec(typeDefinition))) {
            propertyNames.push(match[1].trim()); // Trim to remove any leading/trailing spaces
        }
        
        const propertyArray = propertyNames;
        return propertyArray

    } catch (error) {
        console.log("Error Mapping Column: ", error)
        return "*"
    }
}

export default mapColumn