# Acceptance Criteria

## PM-001
```gherkin
Given a product title is empty
Then show an error message that says "Product title cannot be empty"
```

## PM-002
```gherkin
Given a tag title is empty 
Then show an error message that says "Tag cannot be empty"
```

## PM-003
```gherkin
Given there exists a duplicate tag title for a product 
Then show an error message that says "Duplicate tags are not allowed"
```

## PM-004
```gherkin
Given a vendor title is empty 
Then show an error message that says "Vendor cannot be empty"
```

## PM-005
```gherkin
Given we are fetching data
Then show a loading screen
```

## PM-006
```gherkin
Given we attempt to fetched data 
Then show the product data entry form
```

## PM-007
```gherkin
Given we attempt to save data
Then replace the save button with a spinner
```

## PM-008
```gherkin
Given we saved data successfully
Then show a confirmation message
```

## PM-009
```gherkin
Given we have not started
Then show a blank page
```

## PM-010
```gherkin
When the user attempts to add a new tag
Then show a new tag data entry field
```

## PM-010
```gherkin
Given the vendor title is empty
    And the vendor title is showing an error
When the user changes the title
Then do not show an error message for the vendor title
```

## PM-011
```gherkin
When the user attempts to remove a tag
Then remove the tag from the data entry field
```

## PM-012
```gherkin
Given there are form field errors 
Then disable the submit button
```

## PM-013
```gherkin
Given we have loaded data successfully
Then show the populated data entry form
```