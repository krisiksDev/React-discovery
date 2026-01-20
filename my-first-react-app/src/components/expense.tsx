import { useState, useEffect } from 'react';

interface Expense {
    id: number;
    description: string;
    amount: number;
    category: 'alimentation' | 'transport' | 'loisirs' | 'autres';
    date: string;
}

export default function ExpenseManager() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [filter, setFilter] = useState<'Toutes' | 'alimentation' | 'transport' | 'loisirs' | 'autres'>('Toutes');
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: 'alimentation' as const,
    });

    useEffect(() => {
        try {
            const savedExpenses = localStorage.getItem('expenses');
            console.log('Dépenses chargées du localStorage:', savedExpenses);
            if (savedExpenses) {
                const parsed = JSON.parse(savedExpenses);
                setExpenses(parsed);
            }
        } catch (error) {
            console.error('Erreur localStorage:', error);
        }
    }, []);

    useEffect(() => {
        if (expenses.length > 0) {
            try {
                localStorage.setItem('expenses', JSON.stringify(expenses));
                console.log('Dépenses sauvegardées:', expenses);
            } catch (error) {
                console.error('Erreur lors de la sauvegarde:', error);
            }
        }
    }, [expenses]);

    const addExpense = () => {
        if (!formData.description.trim() || !formData.amount) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        const newExpense: Expense = {
            id: Date.now(),
            description: formData.description,
            amount: parseFloat(formData.amount),
            category: formData.category,
            date: new Date().toLocaleDateString('fr-FR'),
        };

        setExpenses([...expenses, newExpense]);
        setFormData({ description: '', amount: '', category: 'alimentation' });
    };

    const deleteExpense = (id: number) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const filteredExpenses = filter === 'Toutes'
        ? expenses
        : expenses.filter(expense => expense.category === filter);
    const total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'amount' ? value : value,
        }));
    };

    const handleAddExpense = () => {
        addExpense();
    };

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial' }}>
            <h1>Gestionnaire de Dépenses</h1>

            {/* Formulaire d'ajout */}
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                <h2>Ajouter une dépense</h2>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Montant (€)"
                        value={formData.amount}
                        onChange={handleInputChange}
                        step="0.01"
                        style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
                    >
                        <option value="alimentation">Alimentation</option>
                        <option value="transport">Transport</option>
                        <option value="loisirs">Loisirs</option>
                        <option value="autres">Autres</option>
                    </select>
                </div>
                <button
                    onClick={handleAddExpense}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Ajouter
                </button>
            </div>

            {/* Filtres */}
            <div style={{ marginBottom: '20px' }}>
                <h3>Filtrer par catégorie:</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['Toutes', 'alimentation', 'transport', 'loisirs', 'autres'].map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category as typeof filter)}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: filter === category ? '#2196F3' : '#ddd',
                                color: filter === category ? 'white' : 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Total */}
            <div style={{
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center'
            }}>
                <h2>Total: {total.toFixed(2)}€</h2>
            </div>

            {/* Liste des dépenses */}
            <h2>Liste des dépenses</h2>
            {filteredExpenses.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#999', fontSize: '16px' }}>
                    Aucune dépense à afficher
                </p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {filteredExpenses.map(expense => (
                        <li
                            key={expense.id}
                            style={{
                                padding: '15px',
                                marginBottom: '10px',
                                borderRadius: '4px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <strong>{expense.description}</strong>
                                <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>
                                    {getCategoryEmoji(expense.category)} {expense.category} • {expense.date}
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2196F3' }}>
                                    {expense.amount.toFixed(2)}€
                                </span>
                                <button
                                    onClick={() => deleteExpense(expense.id)}
                                    style={{
                                        padding: '6px 12px',
                                        backgroundColor: '#f44336',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Supprimer
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function getCategoryEmoji(category: string): string {
    const emojis: Record<string, string> = {
        alimentation: '',
        transport: '',
        loisirs: '',
        autres: ''
    };
    return emojis[category] || '📌';
}
