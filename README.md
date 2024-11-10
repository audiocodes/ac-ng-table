# AudioCodes Angular Table

An advanced, feature-rich Angular table component developed and maintained by AudioCodes. This open-source project aims to assist the community by providing a powerful table component with functionalities such as virtual scroll, sorting, resizable columns, collapsible rows, and more.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Angular Version](https://img.shields.io/badge/angular-%5E14.0.0-brightgreen.svg)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

[//]: # (- **Virtual Scroll**: Efficiently handle large datasets by rendering only the visible rows.)

[//]: # (- **Sorting**: Click on column headers to sort data ascending or descending.)

[//]: # (- **Resizable Columns**: Adjust column widths to fit your content.)

[//]: # (- **Collapsible Rows**: Expandable rows to display nested or additional data.)

[//]: # (- **Pagination**: Navigate through data with built-in pagination controls.)

[//]: # (- **Row Selection**: Single or multiple row selection capabilities.)

[//]: # (- **Filtering**: Filter data based on column values.)

[//]: # (- **Custom Templates**: Fully customizable cell templates.)

[//]: # (- **Accessibility**: Compliant with ARIA standards for an inclusive experience.)

[//]: # (- **Theming**: Easy theming with CSS variables or custom styles.)

## Demo

[//]: # (Check out our [Live Demo]&#40;https://github.com/audiocodes/angular-table-demo&#41; to see the table in action.)

## Installation

[//]: # (Install the package via npm:)

[//]: # ()
[//]: # (```bash)

[//]: # (npm install @audiocodes/angular-table --save)

[//]: # (```)

## Usage

[//]: # ()
[//]: # (Import the `AcTableModule` in your module:)

[//]: # ()
[//]: # (```typescript)

[//]: # (import { AcTableModule } from '@audiocodes/angular-table';)

[//]: # ()
[//]: # (@NgModule&#40;{)

[//]: # (  imports: [)

[//]: # (    // other imports...)

[//]: # (    AcTableModule)

[//]: # (  ],)

[//]: # (  // declarations, providers, bootstrap...)

[//]: # (}&#41;)

[//]: # (export class AppModule { })

[//]: # (```)

[//]: # ()
[//]: # (Use the component in your template:)

[//]: # ()
[//]: # (```html)

[//]: # (<ac-table [columns]="columns" [data]="data" &#40;rowClick&#41;="onRowClick&#40;$event&#41;">)

[//]: # (</ac-table>)

[//]: # (```)

[//]: # ()
[//]: # (Define your data and columns in your component:)

[//]: # ()
[//]: # (```typescript)

[//]: # (export class AppComponent {)

[//]: # (  data = [)

[//]: # (    { id: 1, name: 'John Doe', age: 28, department: 'Engineering' },)

[//]: # (    { id: 2, name: 'Jane Smith', age: 34, department: 'Marketing' },)

[//]: # (    // more data...)

[//]: # (  ];)

[//]: # ()
[//]: # (  columns = [)

[//]: # (    { field: 'id', header: 'ID', sortable: true },)

[//]: # (    { field: 'name', header: 'Name', sortable: true, resizable: true },)

[//]: # (    { field: 'age', header: 'Age', sortable: true },)

[//]: # (    { field: 'department', header: 'Department', sortable: true },)

[//]: # (  ];)

[//]: # ()
[//]: # (  onRowClick&#40;rowData: any&#41; {)

[//]: # (    console.log&#40;'Row clicked:', rowData&#41;;)

[//]: # (  })

[//]: # (})

[//]: # (```)

## API Reference

### `<ac-table>`

#### Inputs

[//]: # (- `@Input&#40;&#41; data: any[]`  )

[//]: # (  The array of data objects to display in the table.)

[//]: # ()
[//]: # (- `@Input&#40;&#41; columns: ColumnDef[]`  )

[//]: # (  Defines the columns of the table.)

[//]: # ()
[//]: # (- `@Input&#40;&#41; virtualScroll: boolean`  )

[//]: # (  Enables virtual scrolling. Default is `false`.)

[//]: # ()
[//]: # (- `@Input&#40;&#41; pageSize: number`  )

[//]: # (  Number of items per page when pagination is enabled.)

[//]: # ()
[//]: # (- `@Input&#40;&#41; resizable: boolean`  )

[//]: # (  Allows columns to be resizable. Default is `false`.)

#### Outputs

[//]: # (- `@Output&#40;&#41; rowClick: EventEmitter<any>`  )

[//]: # (  Emits the data object of the clicked row.)

[//]: # ()
[//]: # (- `@Output&#40;&#41; sortChange: EventEmitter<SortEvent>`  )

[//]: # (  Emits when the sorting changes.)

#### ColumnDef Interface

[//]: # (```typescript)

[//]: # (interface ColumnDef {)

[//]: # (  field: string;)

[//]: # (  header: string;)

[//]: # (  sortable?: boolean;)

[//]: # (  resizable?: boolean;)

[//]: # (  template?: TemplateRef<any>;)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (- `field`: The property name of the data object.)

[//]: # (- `header`: The display name of the column header.)

[//]: # (- `sortable`: Enables sorting on this column.)

[//]: # (- `resizable`: Allows the column to be resizable.)

[//]: # (- `template`: Custom template for cell rendering.)

## Contributing

[//]: # (Contributions are welcome! Please read our [Contributing Guidelines]&#40;CONTRIBUTING.md&#41; before submitting a pull request.)

[//]: # ()
[//]: # (1. Fork the repository.)

[//]: # (2. Create your feature branch: `git checkout -b feature/my-new-feature`.)

[//]: # (3. Commit your changes: `git commit -am 'Add some feature'`.)

[//]: # (4. Push to the branch: `git push origin feature/my-new-feature`.)

[//]: # (5. Submit a pull request.)

## License

[//]: # (This project is licensed under the MIT License - see the [LICENSE]&#40;LICENSE&#41; file for details.)

## Support

[//]: # (If you have any questions or need help, feel free to open an issue on the repository or contact us at [opensource@audiocodes.com]&#40;mailto:opensource@audiocodes.com&#41;.)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (Thank you for using the AudioCodes Angular Table component! We hope it serves your project well. Happy coding!)
