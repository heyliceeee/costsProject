function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Enter project name"/>
            </div>
            <div>
                <input type="number" placeholder="Enter total budget"/>
            </div>
            <div>
                <select name="category_id">
                <option disabled selected>Select the category</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Create project"/>
            </div>
        </form>
    );
}

export default ProjectForm;